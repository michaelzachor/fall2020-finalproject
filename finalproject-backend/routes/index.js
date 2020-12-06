const express = require('express');
const router = express.Router();

// Require Firebase
const firebase = require("firebase");
// Initialize Firestore Database
const db = firebase.firestore();

const sampleJSON =[{
        name: 'Great Eastern',
        type: 'Trail',
        level: 'circle',
        // reviews: [user1Review, user2Review, user3Review]
    },
    {
        name: 'Chute',
        type: 'Trail',
        level: 'square',
        // reviews: [user1Review, user2Review, user3Review]
    },
    {
        name: 'Cascade',
        type: 'Trail',
        level: 'diamond',
        // reviews: [user1Review, user2Review]
    },
    {
        name: 'Pickel Barrel',
        type: 'Attraction',
        style: 'Nightclub',
        town: 'Killington',
        // reviews: [user1Review, user2Review]
    },
    {
        name: 'Strangefellows Pub',
        type: 'Attraction',
        style: 'Bar',
        town: 'Rutland',
        // reviews: [user1Review, user3Review]
    },
    {
        name: 'Tokyo House',
        type: 'Attraction',
        style: 'Restaurant',
        town: 'Rutland',
        // reviews: [user1Review, user2Review, user3Review]
    }
];

router.get('/', (req, res) => res.send(sampleJSON));

module.exports = router;