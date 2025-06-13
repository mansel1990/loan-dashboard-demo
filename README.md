# Loan Dashboard – React + MUI + TypeScript

This project demonstrates a **Loan Dashboard** built using **React**, **TypeScript**, and **Material UI (MUI)** components. It simulates a basic view where loan records can be browsed, filtered, and paginated.

## Note

When you run npm start it will start both the backend and frontend. Backend is started with nodemon and frontend with react-scripts.

## 🔧 Features

- Displays a list of **mock loan records** (generated locally).
- **Filtering** by:
  - Applicant name (search)
  - Loan status (Approved, Pending, Rejected)
- **Server-style pagination** with large dataset handling.
- **Loading** and **error states** are handled.
- Uses **MUI DataGrid** for table rendering.
- Note total count and pages change when filtering and searching
- Modular components:
  - `LoanTable`: Reusable table view component
  - `LoanFilter`: Reusable filter bar with dropdown and text input

## Things I would improve if not mock

- Surely I would send the pagination to BE if data goes beyond 30k records
- If it BE pagination then sorting and filter function move there too.

## 📦 Installation

```bash
npm install
npm start
```
