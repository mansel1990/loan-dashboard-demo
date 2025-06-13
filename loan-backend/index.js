const express = require("express");
const cors = require("cors");
const { faker } = require("@faker-js/faker");

const app = express();
const PORT = 5050;

app.use(cors());

const statuses = ["Approved", "Pending", "Rejected"];

const generateLoanData = (count = 500) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    applicant: faker.person.fullName(),
    amount: faker.number.int({ min: 1000, max: 100000 }),
    status: statuses[Math.floor(Math.random() * statuses.length)],
  }));
};

console.log("Starting server...");

app.get("/api/loans", (req, res) => {
  console.log("Getting loans");
  const loans = generateLoanData(500);
  res.json(loans);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
