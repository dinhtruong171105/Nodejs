import { where } from "sequelize";
import db from "../models/index";
import bcrypt from 'bcrypt';

let handleUserLogin = (userEmail, userPassword) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(userEmail);
            if (isExist) {
                // User already exists
                let user = await db.User.findOne({
                    attributes: ['email', 'roleId', 'password'],
                    where: { email: userEmail },
                    raw: true
                });
                if (user) {
                    //compare password
                    let check = bcrypt.compareSync(userPassword, user.password); //false
                    if (check) {
                        delete user.password;
                        userData.errCode = 0;
                        userData.errMessage = `OK!!!!!`;
                        userData.user = user;
                    }
                    else {
                        userData.errCode = 3;
                        userData.errMessage = `Wrong password!!!!!`;
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `User not found!!!!!`;
                }

            } else {
                // User does not exist
                userData.errCode = 1;
                userData.errMessage = `User's email is not exist in the system`;
            }
            resolve(userData);
        }
        catch (e) {
            reject(e);
        }
    })
}

let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail }
            })
            if (user) {
                resolve(true); // Email exists
            } else {
                resolve(false); // Email does not exist
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin,
}