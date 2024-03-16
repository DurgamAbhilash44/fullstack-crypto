import express from "express";
import bodyParser from "body-parser"; // Import bodyParser before custom modules
import db from "./db.js";
import exchangesRoutes from "./routes/exchangesRoutes.js";
import coinsRoutes from "./routes/coinsRoutes.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use(exchangesRoutes); // Mount routes without leading slash
app.use(coinsRoutes); // Mount routes without leading slash

 const port=process.env.PORT || 3300;
app.listen(port, () => {
  console.log("Express server initialized https://localhost:3300");
});
