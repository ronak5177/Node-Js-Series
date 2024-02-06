const express = require("express");
const multer = require("multer");
const path = require("path");

const PORT = 8000;
const app = express();

// const upload = multer({ dest: "uploads/" });

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        return cb(null, "./uploads")
    },
    filename: function (req, file, cb){
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage })


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("homepage");
});

app.post("/upload", upload.fields([{ name: "profileImage" }, {name: "coverImage"}]), (req, res) => {
    // console.log(req.body)
    console.log(req.file)

    res.redirect("/")
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
