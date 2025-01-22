const express = require("express");
const nunjucks = require("nunjucks");
const app = express();

const { file, sequelize } = require("./model");

require("dotenv").config();

const multerUpload = require("./file.middleware");

nunjucks.configure("views", { express: app });

app.set("view engine", "html");
app.use(express.urlencoded({ extended: true }));

app.use(express.static("uploads"));

const PORT = process.env.SERVER_PORT ? process.env.SERVER_PORT : 3000;

app.get("/", async (req, res) => {
  const imgList = await file.findAll();
  res.render("index.html", { imgList });
});

app.get("/uploads/:filename", async (req, res) => {
  const filename = req.params.filename;
  const imgList = await file.findOne({
    where: { filename: filename },
  });
  res.render("view.html", { imgList });
});

app.post("/upload", multerUpload.single("file"), async (req, res) => {
  try {
    const { filename, path } = req.file;
    await file.create({ filename: filename, path: path });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`Server running on http://localhost:${PORT}`);
});
