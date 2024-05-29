const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({
     origin: "http://localhost:3000",
     methods: "GET, POST, PUT, DELETE",
     credentials: true 
    }));

app.use(session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());


mongoose.connect("mongodb://localhost:27017/users")
.then(() => {
  console.log("MongoDB connected");
}).catch(err => {
  console.error("MongoDB connection error:", err);
});


app.use("/auth", authRoutes);
app.use("/user", userRoutes);

app.listen(3001, ()=>{
    console.log("server is running")
})