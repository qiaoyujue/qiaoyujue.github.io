var express = require("express");
var app = express();
var router = require("./router/router.js");

var session = require('express-session');

//使用session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

//模板引擎
app.set("view engine","ejs");
//静态页面
app.use(express.static("./public"));
app.use("/avatar",express.static("./avatar"));
//路由表
app.get("/",router.showIndex);            
app.get("/regist",router.showRegist);    
app.post("/doregist",router.doRegist);    
app.get("/login",router.showLogin);        
app.post("/dologin",router.doLogin);
app.post("/post",router.doPost);            
app.get("/getAllComments",router.getAllComments);  
app.get("/getuserinfo",router.getuserinfo); 
app.get("/getCommentAmount",router.getCommentAmount);  
app.get("/user/:user",router.showUser);  
app.get("/post/:oid",router.showUser);  
app.get("/userlist",router.showuserlist);  

app.listen(3000);
