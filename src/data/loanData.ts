// src/data/loanData.ts
export type LoanStatus = "Approved" | "Pending" | "Rejected";

export interface LoanRecord {
  id: number;
  applicant: string;
  amount: number;
  status: LoanStatus;
}

export function generateLoanData(count = 200): LoanRecord[] {
  const statuses: LoanStatus[] = ["Approved", "Pending", "Rejected"];
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    applicant: `User ${i + 1}`,
    amount: Math.floor(Math.random() * 100000),
    status: statuses[Math.floor(Math.random() * statuses.length)],
  }));
}
