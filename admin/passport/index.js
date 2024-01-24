
const local = require("./localStrategy");


module.exports= (passport) => {
    // req.login() 메서드 호출 시 serializeUser() 메서드 자동 호출
    // passport 객체에 user 정보를 저장
    passport.serializeUser((user, done) =>{
        done(null, user);
    });

    // 바인딩된 세션 데이터를 조회하는 역할
    passport.deserializeUser((user, done) =>{
        done(null, user);
    });

    // 로컬 사용자 전략에 패스포트 객체를 전달하여 실제 사용자 로그인 기능을 구현
    // 아이디/암호 체크하고 세션으로 저장할 데이터를 정의하는 기능 제공
    local(passport);
}