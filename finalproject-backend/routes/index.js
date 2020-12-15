const express = require('express');
const router = express.Router();

const firebase = require("firebase");
const db = firebase.firestore();
const reviews = db.collection('reviews');

router.get('/', (req, res) => res.send(sampleJSON));

router.get("/all-reviews", (req, res) => {
    const arrayOfReviews = [];

    reviews
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            arrayOfReviews.push(doc.data());
        });
        return res.send(arrayOfReviews);
    })
    .catch(function (error) {
        console.warn("Error:", error);
        return res.send(arrayOfReviews);
    })
});

module.exports = router;