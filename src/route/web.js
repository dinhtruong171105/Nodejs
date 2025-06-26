import express from "express"
import homeController from "../controllers/homeController";

let route = express.Router();

let initWebRoutes = (app) => {
    route.get('/', homeController.getHomePage);
    route.get('/about', homeController.getAboutPage);
    route.get('/sign_inout', homeController.getSignInOutPage);
    route.get('/database', homeController.getDatabase);

    route.get('/chonjohn', (req, res) => {
        return res.send('Hello Chon_John!!!!! (web.js )')
    });

    //rest api

    return app.use("/", route); //tất cả các tuyến đường được định nghĩa 
    // trong route sẽ bắt đầu từ URL gốc /.
}

module.exports = initWebRoutes;