const express = require('express');
const router = express.Router();

// Require Firebase
const firebase = require("firebase");
// Initialize Firestore Database
const db = firebase.firestore();
const reviews = db.collection('reviews');

const sampleJSON =[{
        name: 'Great Eastern',
        type: 'Trail',
        subtype: 'circle',
        // reviews: [user1Review, user2Review, user3Review]
    },
    {
        name: 'Chute',
        type: 'Trail',
        subtype: 'square',
        // reviews: [user1Review, user2Review, user3Review]
    },
    {
        name: 'Cascade',
        type: 'Trail',
        subtype: 'diamond',
        // reviews: [user1Review, user2Review]
    },
    {
        name: 'Pickel Barrel',
        type: 'ApresSki',
        subtype: 'Nightclub',
        town: 'Killington',
        // reviews: [user1Review, user2Review]
    },
    {
        name: 'Strangefellows Pub',
        type: 'ApresSki',
        subtype: 'Bar',
        town: 'Rutland',
        // reviews: [user1Review, user3Review]
    },
    {
        name: 'Tokyo House',
        type: 'ApresSki',
        subtype: 'Restaurant',
        town: 'Rutland',
        // reviews: [user1Review, user2Review, user3Review]
    }
];

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
    // res.send(sampleJSON)
});

module.exports = router;