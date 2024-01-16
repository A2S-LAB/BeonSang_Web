var express = require("express");
var router = express.Router();

// 로그인 페이지
router.get("/", async (req, res, next) => {
	res.render("menu");
});

router.post("/", async (req, res, next) => {
	res.redirect("/menu");
});

module.exports = router;
