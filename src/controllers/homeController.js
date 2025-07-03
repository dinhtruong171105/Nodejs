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
    return res.render('displayCRUD.ejs', {
        dataTable: data
    })
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        return res.render('editCRUD.ejs', {
            user: userData
        });
    }
    else {
        return res.send('User not found!!!!!')
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    })
}

let deleteCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        await CRUDService.deleteUserById(userId);
        return res.send('Delete user succeeded!!!!!')
    }
    else {
        return res.send('User not found!!!!!')
    }

}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getSignInPage: getSignInPage,
    getDatabase: getDatabase,
    getBuyingPage: getBuyingPage,
    getSignedInPage: getSignedInPage,
    displayGetCRUDPage: displayGetCRUDPage,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}