import './App.css';
import React, {useEffect, useState} from 'react';
import {Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
//Styles 
import './App.css';
// Pages
import Login from './containers/Login';
import CreateAccount from './containers/CreateAccount';
import UserProfile from './containers/UserProfile';
import Trails from './containers/Trails';
import Attractions from './containers/Attractions';
import LeaveAReview from './containers/LeaveAReview';
//Components
import Header from './components/Header';


function App() {
  const [loggedIn, setLoggedIn] = useState(false); // bool to determine if logged in
  const [loading, setLoading] = useState(true); // is page loading? (don't show info before its' loaded)
  const [userInformation, setUserInformation] = useState({});

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: "final-project-4d167.firebaseapp.com",
    databaseURL: "https://final-project-4d167.firebaseio.com",
    projectId: "final-project-4d167",
    storageBucket: "final-project-4d167.appspot.com",
    messagingSenderId: "577053299904",
    appId: "1:577053299904:web:ee5a3f9e1fac6d7a364925"
  };

  // ensure app is initialized when it's ready
  useEffect(() => {
    // initializes firebase, but only if it hasn't been initialized before
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    console.log('firebase initialized');
  }, [firebaseConfig])

  // check to see if user is logged in
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      console.log({user});
      if(user) {
        setLoggedIn(true);
        setUserInformation(user);
      } else {
        setLoggedIn(false);
      }
      // it's no longer loading
      setLoading(false);
    })
  }, []);

  console.log(firebase);
  useEffect(() => {

  })

  // function for logging in
  function LoginFunction(e) {
    // This is what you'll run when you wanna log in
    e.preventDefault(); // stop the form from submitting as a normal html form
    const email = e.currentTarget.loginEmail.value;
    const password = e.currentTarget.loginPassword.value;

    console.log({ email, password });

    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function(response) {
      console.log('LOGIN RESPONSE', response);
      setLoggedIn(true);
    })
    .catch(function(error) {
      console.log('LOGIN ERROR', error);
      // setLoggedIn(false); // it already is by default
    });
  }
  // function for logging out
  function LogoutFunction() {
    // Run this when you wanna log out
    firebase.auth().signOut().then(function() {
      setLoggedIn(false);
      setUserInformation({});
    }).catch(function(error) {
      console.log("LOGOUT ERROR", error);
    });
  }
  // function for creating an account
  function CreateAccountFunction(e) {
    // Run this when you create an account
    e.preventDefault();
    const email = e.currentTarget.createEmail.value;
    const password = e.currentTarget.createPassword.value;

    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function(response) {
      console.log('VALID ACCOUNT CREATED FOR:', email, response);
      setLoggedIn(true);
    })
    .catch(function(error) {
      console.log('ACCOUNT CREATION FAILED', error);
    })
  }
  console.log({ loggedIn });

  if(loading) return null;

  const db = firebase.firestore();
  const reviews = db.collection("reviews");

  const reviewArray = [];
  console.log(".doc: ", reviews.doc("great_eastern"));

  reviews.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        reviewArray.push({id:doc.id, data:doc.data()});
    });
});

console.log(reviewArray);

  return (
  <div className="App">
    <Header loggedIn={loggedIn} LogoutFunction={LogoutFunction} userInformation={userInformation}/>
    <div className="NonHeader">
    <Router>
      <Route exact path="/login">
        {!loggedIn ? (
          // if user is not logged in
          // go to Login
          <Login LoginFunction={LoginFunction} />
        )  : (
          // otherwise go to UserProfile
          <Redirect to="/"/>
        )}
      </Route>
      <Route exact path="/create-account">
        {!loggedIn ? (
          // if user is not logged in
          // go to CreateAccount
          <CreateAccount CreateAccountFunction={CreateAccountFunction}/>
        ) : (
          // otherwise go to UserProfile
          <Redirect to="/"/>
        )}
      </Route>
      <Route exact path="/">
        {!loggedIn ? (
          // if user is not logged in
          // go to login
          <Redirect to="/login" />
        ): (
          // otherwise go to UserProfile
          // pass userInformation as a prop to the UserProfile page
          <UserProfile userInformation={userInformation} />
        )}
      </Route>
      <Route exact path="/trails">
        <Trails reviewArray={reviewArray} />
      </Route>
      <Route exact path="/attractions">
        <Attractions />
      </Route>
      <Route exact path="/review/:trail">
        <LeaveAReview userInformation={userInformation}/>
      </Route>
    </Router>
    </div>
  </div>
  );
}

export default App;