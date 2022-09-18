const path = require("path");
const multer = require("multer");

const imageProduct = path.join(__dirname, "../public/images/products")


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, imageProduct);
  },
  filename: (req, file, cb) => {
    let nameFile = `img-${Date.now()}-${file.originalname}`;
    cb(null, nameFile);
  },
});

const upload = multer({ storage : storage });

module.exports = upload;
