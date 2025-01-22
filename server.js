// require, app.use, set
// 종속성의 우선순위 먼저 파악
const express = require("express");
const app = express();
const PORT = process.env.SERVER_PORT || 3000;
require("dotenv").config();

const { File, sequelize } = require("./model");
const multerUpload = require("./file.middleware");

const nunjucks = require("nunjucks");
nunjucks.configure("views", { express: app });

app.set("view engine", "html");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("uploads"));

app.get("/", async (req, res) => {
  const imgList = await File.findAll();
  res.render("index.html", { imgList });
});

app.get("/uploads/:filename", async (req, res) => {
  const filename = req.params.filename;
  const imgList = await File.findOne({
    where: { filename: filename },
  });
  res.render("view.html", { imgList });
});

app.post("/upload", multerUpload.single("file"), async (req, res) => {
  try {
    const { filename, path } = req.file;
    await File.create({ filename, path });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`Server running on http://localhost:${PORT}`);
});
