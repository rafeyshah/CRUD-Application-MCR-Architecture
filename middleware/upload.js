const multer = require("multer");

// On Express Documentation, Callbacks are used :)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/files/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
