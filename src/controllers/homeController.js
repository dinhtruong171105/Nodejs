import db from '../models/index'

let getHomePage = (req, res) => {
    return res.render('homepage.ejs')
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs')
}

let getSignInOutPage = (req, res) => {
    return res.render('test/sign_inout.ejs')
}

let getDatabase = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('database.ejs', {
            data: JSON.stringify(data)
        })
    } catch (e) {
        console.log(e);
    }
}

let getBuyingPage = (req, res) => {
    return res.render('buying.ejs')
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getSignInOutPage: getSignInOutPage,
    getDatabase: getDatabase,
    getBuyingPage: getBuyingPage,
}