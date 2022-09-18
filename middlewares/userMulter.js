const path = require('path');
const multer = require('multer');

const userImage = path.join(__dirname, '../public/images/users')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, userImage);
    },
    filename: (req, file, cb) => {
        let nameFile = `img-${Date.now()}-${file.originalname}`;
        cb(null, nameFile);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;