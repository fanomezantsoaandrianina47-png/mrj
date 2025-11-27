const express = require("express");
const app = express();
const layout = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();
const userRoute = require('./router/user');
const authRoute = require('./router/auth');
const session = require('express-session');
const flash = require('connect-flash');

// express-session

app.use(session({
  secret:"zertyuvbn",
  resave:false,
  saveUninitialized:true
}))

app.use((req,res,next)=>{
  res.locals.user = req.session.user;
  res.locals.admin = req.session.admin;
  next();
})

// connect-flash
app.use(flash());
app.use((req,res,next)=>{
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
})

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use('/admin',express.static("public"));
app.use('/auth/',express.static("public"));
app.use(layout);
app.set("view engine", "ejs");
app.set("views", "view");


// express-fileupload
app.use(fileUpload({
  createParentPath: true
}));

// Routes

app.use('/', userRoute);
app.use('/auth', authRoute);
app.use('/admin', require('./router/admin'));

app.listen(3000, () => console.log("Server started on http://localhost:3000"));
