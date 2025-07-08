import userService from '../services/userService';

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    // Check email exist
    if (!email || !password) {
        return res.status(500).json({
            errorCode: 1,
            message: 'Missing email parameter'
        })
    }

    let userData = await userService.handleUserLogin(email, password);
    console.log(userData)
    // Compare password
    // return userInfor
    // access token: JWT json web token

    return res.status(200).json({
        errorCode: userData.errCode,
        message: userData.errMessage,
        user: userData ? userData.user : {}
    });
}

module.exports = {
    handleLogin: handleLogin,
}