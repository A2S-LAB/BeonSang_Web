

exports.isLoggedIn = (req, res, next) => {
    if (req.session.isLogined != undefined){
        next();
    } else {
        res.redirect('/');
    }
};

exports.isNotLoggedIn = (req, res, next) => {
    if (req.session.isLogined == undefined){
        next();
    } else {
        res.redirect('/main');
    }
};

