import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname + "/../"));
app.use(express.static("views"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/faculties/:department", (req, res) => {
  const department = req.params.department;
  res.render("faculties", { department });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
