import multer from "multer";

const storage = multer.diskStorage({});
const upload = multer({ storage: storage });

module.exports = upload;
