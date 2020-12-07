// leave a review
const express = require('express');
const router = express.Router();

// SET UP FIREBASE ON THIS PAGE
// 1. Require Firebase
const firebase = require("firebase");
// 2. Initialize Firestore Database
const db = firebase.firestore();
// 3. Reference a specific collection
const reviews = db.collection("reviews");

// router.get('/', function(req, res) {
//     res.render('/review');
//  });
// router.get('/', (req, res) => res.send());

router.get('/submit', (req, res) => {
    const queryParams = req.query; 
    console.log("req:", req);
    const idFromTitle = queryParams.userEmail.toLowerCase() + "_" + queryParams.name;
    reviews
    .doc(idFromTitle) 
    .set(queryParams) 
    .then(function(doc) {
        res.send("Successful submission")
    })
    .catch(function (error) {
        console.log('error', error);
        res.send("Failed submission")
    })
    if (queryParams.type === "trail") res.redirect('http://localhost:3000/Trails');
    else res.redirect('http://localhost:3000/apres_ski')
})


module.exports = router;
