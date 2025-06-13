import React from "react";
import { DataGrid, GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import { LoanRecord } from "../data/loanData";

interface LoanTableProps {
  data: LoanRecord[];
  loading: boolean;
  error: boolean;
  page: number;
  pageSize: number;
  rowCount: number;
  onPageChange: (model: GridPaginationModel) => void;
}

const LoanTable: React.FC<LoanTableProps> = ({
  data,
  loading,
  error,
  page,
  pageSize,
  rowCount,
  onPageChange,
}) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "applicant", headerName: "Applicant", width: 200 },
    { field: "amount", headerName: "Amount", type: "number", width: 130 },
    { field: "status", headerName: "Status", width: 140 },
  ];

  if (error)
    return <p style={{ color: "red" }}>Failed to load loan records.</p>;

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pagination
        paginationMode="server"
        rowCount={rowCount}
        pageSizeOptions={[10, 25, 50]}
        paginationModel={{ page, pageSize }}
        onPaginationModelChange={onPageChange}
        loading={loading}
      />
    </div>
  );
};

export default LoanTable;
