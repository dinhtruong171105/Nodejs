import express from "express"
import homeController from "../controllers/homeController";

let route = express.Router();

let initWebRoutes = (app) => {
    route.get('/', homeController.getHomePage);
    route.get('/about', homeController.getAboutPage);
    route.get('/sign_in', homeController.getSignInPage);
    route.get('/database', homeController.getDatabase);
    route.get('/buying', homeController.getBuyingPage);
    route.post('/sign_in/signed_in', homeController.getSignedInPage);
    route.get('/getCRUD', homeController.displayGetCRUDPage);
    route.get('/edit-crud', homeController.getEditCRUD);
    route.post('/put-crud', homeController.putCRUD);
    route.get('/delete-crud', homeController.deleteCRUD);
    //rest api

    return app.use("/", route); //tất cả các tuyến đường được định nghĩa 
    // trong route sẽ bắt đầu từ URL gốc /.
}

module.exports = initWebRoutes;