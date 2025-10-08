import express from "express";
import sql from "mssql";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// AAD authentication example
const dbConfig = {
  server: process.env.AZURE_SQL_SERVER,
  database: process.env.AZURE_SQL_DATABASE,
  authentication: {
    type: 'default'
},
  options: {
    encrypt: true
  }
};

sql.connect(dbConfig)
  .then(() => console.log("✅ Connected to Azure SQL (AAD)"))
  .catch(err => console.error("❌ Database connection failed:", err));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
