import React, { useEffect, useState } from "react";
import { LoanRecord } from "../data/loanData";
import LoanTable from "../components/LoanTable";
import { GridPaginationModel } from "@mui/x-data-grid";
import LoanFilter from "../components/LoanFilter";
import { Container, Typography, Paper } from "@mui/material";

const DashboardPage: React.FC = () => {
  const [loans, setLoans] = useState<LoanRecord[]>([]);
  const [filtered, setFiltered] = useState<LoanRecord[]>([]);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5050/api/loans");
        const data = await response.json();
        setLoans(data);
        setFiltered(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching loan data", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchLoans();
  }, []);

  useEffect(() => {
    let filtered = loans;
    if (status) {
      filtered = filtered.filter((loan) => loan.status === status);
    }
    if (search) {
      filtered = filtered.filter((loan) =>
        loan.applicant.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFiltered(filtered);
    setPage(0);
  }, [status, search, loans]);

  const handlePageChange = (model: GridPaginationModel) => {
    setPage(model.page);
    setPageSize(model.pageSize);
  };

  const pagedData = filtered.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Loan Dashboard
      </Typography>

      <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
        <LoanFilter
          status={status}
          search={search}
          onStatusChange={setStatus}
          onSearchChange={setSearch}
        />
      </Paper>

      <Paper elevation={3} sx={{ p: 2 }}>
        <LoanTable
          data={pagedData}
          loading={loading}
          error={error}
          page={page}
          pageSize={pageSize}
          rowCount={filtered.length}
          onPageChange={handlePageChange}
        />
      </Paper>
    </Container>
  );
};

export default DashboardPage;
