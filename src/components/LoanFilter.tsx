import React from "react";
import { TextField, MenuItem } from "@mui/material";

interface LoanFilterProps {
  status: string;
  search: string;
  onStatusChange: (status: string) => void;
  onSearchChange: (search: string) => void;
}

const LoanFilter: React.FC<LoanFilterProps> = ({
  status,
  search,
  onStatusChange,
  onSearchChange,
}) => {
  return (
    <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
      <TextField
        label="Status"
        select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        style={{ width: 150 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Approved">Approved</MenuItem>
        <MenuItem value="Pending">Pending</MenuItem>
        <MenuItem value="Rejected">Rejected</MenuItem>
      </TextField>
      <TextField
        label="Search Applicant"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ width: 200 }}
      />
    </div>
  );
};

export default LoanFilter;
