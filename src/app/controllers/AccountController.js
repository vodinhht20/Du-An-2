class AccountController {
    login(req, res) {
        res.render('account/login');
    }
    signin(req, res) {
        res.render('account/signin');
    }
}
module.exports = new AccountController;