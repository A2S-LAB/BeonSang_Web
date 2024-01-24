var express = require("express");
var router = express.Router();
var bycrypt = require("bcryptjs");
var db = require("../models/index.js");
const AES = require("mysql-aes")

// 로그인 페이지
router.get("/", async (req, res, next) => {
	res.render("login.ejs", {layout: "loginLayout"});
});

router.post("/", async (req, res, next) => {
	var id = req.body.adminId;
	var pw = req.body.password;

	var admin = await db.admin.findOne({
		where: {
			admin_id: id,
		},
	});
	if (admin) {
		pw = AES.decrypt(pw, process.env.DB_PASSWORD_KEY)
		var result = await bycrypt.compare(pw, admin.admin_password);
		if (result) {
			res.redirect("/main");
		} else {
			res.render("login.ejs", { error: "비밀번호가 일치하지 않습니다." });
		}
	}else{
		res.render("login.ejs", { error: "아이디가 일치하지 않습니다." });
	}
});

// 회원가입 페이지
router.get("/join", async (req, res, next) => {
	res.render("join.ejs");
});

router.post("/join", async (req, res, next) => {

	res.redirect("/");
});

// 비밀번호 찾기 페이지
router.get("/find", async (req, res, next) => {
	res.render("find.ejs");
});

router.post("/find", async (req, res, next) => {
	res.redirect("/");
});

// 메인 페이지
router.get("/main", async (req, res, next) => {
	res.render("index");
});

router.post("/main", async (req, res, next) => {
	res.redirect("/main");
});

module.exports = router;
