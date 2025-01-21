// 1.
const { Sequelize, DataTypes } = require("sequelize");

// 2.
const config = require("../config");
const db = config.db.development;

//3
const sequelize = new Sequelize(db.database, db.username, db.password, db);

//4
const fileModel = require("./file.model");

/*
    sequelize : 연결 정보가 담긴 인스턴스 객체
    Sequelize : Sequelize 기본 클래스, 데이터 타입 정의 및 모델 상속
*/

const file = fileModel(sequelize, DataTypes);

module.exports = {
  sequelize,
  file,
};
