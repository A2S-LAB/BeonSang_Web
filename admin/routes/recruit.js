var express = require("express");
var router = express.Router();

// 로그인 페이지
router.get("/", async (req, res, next) => {
	res.render("recruit");
});

router.post("/", async (req, res, next) => {
	res.redirect("/recruit");
});

module.exports = router;
