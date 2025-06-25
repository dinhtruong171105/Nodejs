import express from "express";

// var & let: - var khai báo global.
//            - let khai báo trong phạm vi file. (nên luôn dùng let)
let configViewEngine = (app) => {
    // Cho phép serve toàn bộ thư mục public
    app.use(express.static("./src/public"));

    // Cấu hình EJS

    // Thông báo cho Express biết ta dùng EJS làm template engine
    // VD: khi gọi res.render("homepage"), Express sẽ tìm file homepage.ejs
    app.set("viewEngine", "ejs"); //ejs ~ jsp, blade for if else

    // Mặc định Express tìm trong ./views, nhưng ở đây ta đổi thành ./src/views.
    app.set("views", "./src/views")
}

module.exports = configViewEngine;