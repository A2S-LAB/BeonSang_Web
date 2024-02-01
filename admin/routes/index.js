var express = require("express");
var router = express.Router();
var bycrypt = require("bcryptjs");
var db = require("../models/index.js");
const AES = require("mysql-aes")
const {isLoggedIn, isNotLoggedIn} = require('./sessionMiddleware.js');

// 로그인 페이지
router.get("/", async (req, res, next) => {
	res.render("login.ejs", {layout: "loginLayout"});
});

router.post("/", async (req, res, next) => {
	var id = req.body.adminId;
	var pw = req.body.password;

	var admin = await db.Admin.findOne({
		where: {
			admin_id: id,
		},
	});
	if (admin) {
		// pw = AES.decrypt(pw, process.env.DB_PASSWORD_KEY)
		var result = await bycrypt.compare(pw, admin.admin_password);
		if (result) {
			
			// session 데이터 저장
			var sessionLoginData = {
				admin_id: admin.admin_id,
				admin_name: admin.admin_name,
			};

			req.session.isLogined = sessionLoginData;

			req.session.save(function(){
				res.redirect('/main');
			})

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

	var id = req.body.adminId;
	var email = req.body.email;
	var pw = req.body.password;

	try{
		var regAdminId = await db.Admin.findOne({where:{admin_id:id}});

		if(regAdminId){
			res.render("join.ejs", {error:"이미 존재하는 아이디입니다."});
		} else {
			var bcryptedPw = await bycrypt.hash(pw, 12);

			var admins = {
				admin_id: id,
				admin_password: bcryptedPw,
				admin_name: "관리자",
				email: email,
				telephone: "010-1234-5678",
				used_yn_code: 1,
				reg_date: new Date(),
			};

			var register = await db.Admin.create(admins);

			res.render('login')

			}
		}catch(err){
			console.log(err.message);
	}

});

// 비밀번호 찾기 페이지
router.get("/find", async (req, res, next) => {
	res.render("find.ejs");
});

router.post("/find", async (req, res, next) => {
	res.redirect("/");
});

// 메인 페이지
router.get("/main", isLoggedIn, async (req, res, next) => {
	res.render("index.ejs");
});

router.post("/main", isLoggedIn, async (req, res, next) => {
	res.redirect("/main");
});

module.exports = router;
