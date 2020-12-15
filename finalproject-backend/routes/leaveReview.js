// leave a review
const express = require('express');
const router = express.Router();

// SET UP FIREBASE ON THIS PAGE
const firebase = require("firebase");
const db = firebase.firestore();
const reviews = db.collection("reviews");

router.get('/submit', (req, res) => {
    const queryParams = req.query; 
    const idFromTitle = queryParams.userEmail.toLowerCase() + "_" + queryParams.name;
    reviews
    .doc(idFromTitle) 
    .set(queryParams) 
    .then(function(doc) {
        res.send("Successful submission")
    })
    .catch(function (error) {
        console.warn('error', error);
        res.send("Failed submission")
    })
    if (queryParams.type === "trail") res.redirect('https://sad-varahamihira-171787.netlify.app/trails');
    else res.redirect('https://sad-varahamihira-171787.netlify.app/apres_ski')
})


module.exports = router;
