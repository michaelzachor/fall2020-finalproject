const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: "final-project-4d167.firebaseapp.com",
    databaseURL: "https://final-project-4d167.firebaseio.com",
    projectId: "final-project-4d167",
    storageBucket: "final-project-4d167.appspot.com",
    messagingSenderId: "577053299904",
    appId: "1:577053299904:web:ee5a3f9e1fac6d7a364925"
};

const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

// Routes Import
const indexRoute = require('./routes/index.js');
const leaveReviewRoute = require('./routes/leaveReview.js');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
  
// Routes
app.use('/', indexRoute);
app.use('/review', leaveReviewRoute);


