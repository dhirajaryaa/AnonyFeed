import app from "./app.js";
import connectDB from "./db/connection.js";
import { PORT } from "./config/env.js";

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Express Server Runing ... on port-", PORT);
    });
  })
  .catch(() => {
    console.error("DB connection Error");
    process.exit(1);
  });
