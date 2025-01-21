const multer = require("multer");

// 경로 설정
const destination = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, "uploads/");
  } else {
    callback(new Error("이미지 파일이 아닙니다."));
  }
};

// 파일 이름 설정 함수
const filename = (req, file, callback) => {
  callback(null, file.originalname);
};

const storage = multer.diskStorage({ destination, filename });
const upload = multer({ storage });

module.exports = upload;
