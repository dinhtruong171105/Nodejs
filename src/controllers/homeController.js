let getHomePage = (req, res) => {
    return res.render('homepage.ejs')
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs')
}

let getSignInOutPage = (req, res) => {
    return res.render('test/sign_inout.ejs')
}

// object: {
//      key: ''
//      value: ''
// }

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getSignInOutPage: getSignInOutPage,
}