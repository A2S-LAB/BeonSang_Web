var express = require("express");
var router = express.Router();
var bycrypt = require("bcryptjs");
var db = require("../models/index.js");
const AES = require("mysql-aes")
const {isLoggedIn, isNotLoggedIn} = require('./sessionMiddleware.js');
const multer = require('multer');
const moment = require('moment');

// 파일 위치 지정
var storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, 'public/uploads/');
	},
	filename: function(req, file, cb){
		cb(null, `${moment(Date.now()).format('YYYYMMDDHHmmss')}_${file.originalname}`);
	}	
});

var upload = multer({storage: storage});	


// 로그인 페이지
router.get("/", async (req, res, next) => {
	res.render("login/login.ejs", {layout: "login/loginLayout"});
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
router.get("/register", async (req, res, next) => {
	res.render("login/register.ejs", {layout: "login/loginLayout"});
});

router.post("/join", async (req, res, next) => {

	res.redirect("/");
});

// 비밀번호 찾기 페이지
router.get("/forgot_password", async (req, res, next) => {
	res.render("login/forgot_password.ejs", {layout: "login/loginLayout"});
});

router.post("/forgot_password", async (req, res, next) => {
	res.redirect("/");
});

// 메인 페이지
router.get("/main", async (req, res, next) => {
	res.render("index", {layout: false});
});

router.post("/main", isLoggedIn, async (req, res, next) => {
	res.redirect("/main");
});

// 파일 업로드
router.post("/upload", upload.single('file'), async (req, res, next) => {
	var apiResult = {
        code: 400,
        data: null,
        msg: "",
     };
	try{
		// 파일이 입력되지 않았을 경우
		if (!req.file){
			apiResult.code = 400;
			apiResult.data = null;
			apiResult.msg = "파일이 제대로 업로드되지 않았습니다.";
		}

		// 업로드된 파일 정보 추출
		const uploadFile = req.file;
		const filePath = "uploads/"+uploadFile.filename;

		apiResult.code = 200;
		apiResult.data = filePath;
		apiResult.msg = "파일 업로드 성공";

	}catch(err){
		apiResult.code = 500;
		apiResult.data = null;
		apiResult.msg = "서버 에러";
	}
    res.json(apiResult)

});

module.exports = router;
