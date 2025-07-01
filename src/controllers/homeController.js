import db from '../models/index'
import CRUDService from '../services/CRUDService'

let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

let getAboutPage = (req, res) => {
    return res.render('about.ejs');
}

let getSignInPage = (req, res) => {
    return res.render('sign-in.ejs');
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
    return res.render('buying.ejs');
}

let getSignedInPage = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message)
    return res.render('signed-in.ejs')
    // return res.send('post crud from server');
}

let displayGetCRUDPage = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log('--------------')
    console.log(data)
    console.log('--------------')
    return res.render('displayCRUD.ejs', {
        dataTable: data
    })
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getSignInPage: getSignInPage,
    getDatabase: getDatabase,
    getBuyingPage: getBuyingPage,
    getSignedInPage: getSignedInPage,
    displayGetCRUDPage: displayGetCRUDPage,
}