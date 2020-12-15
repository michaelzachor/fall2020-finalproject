import React, {useEffect, useState, useMemo} from 'react';
import {Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Styles 
import './App.css';
// Pages
import Login from './containers/Login';
import CreateAccount from './containers/CreateAccount';
import UserProfile from './containers/UserProfile';
import Trails from './containers/Trails';
import Apres from './containers/Apres';
import LeaveAReview from './containers/LeaveAReview';
//Components
import Header from './components/Header';


function App() {
  /* USESTATE */
  const [loggedIn, setLoggedIn] = useState(false); // bool to determine if logged in
  const [loading, setLoading] = useState(true); // is page loading? (don't show info before it's loaded)
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

  /* ENSURE APP IS INITIALIZED WHEN READY */
  useEffect(() => {
    // initializes firebase, but only if it hasn't been initialized before
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, [firebaseConfig])

  // check to see if user is logged in
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
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

  /* FUNCTION IS RUN WHEN LOGGING IN */
  function LoginFunction(e) {
    e.preventDefault(); // stop the form from submitting as a normal html form
    const email = e.currentTarget.loginEmail.value;
    const password = e.currentTarget.loginPassword.value;
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function(response) {
      setLoggedIn(true);
    })
    .catch(function(error) {
      console.warn('LOGIN ERROR', error);
      // setLoggedIn(false); // it already is by default
    });
  }

  /* FUNCTION IS RUN WHEN LOGGING OUT */
  function LogoutFunction() {
    firebase.auth().signOut().then(function() {
      setLoggedIn(false);
      setUserInformation({});
    }).catch(function(error) {
      console.warn("LOGOUT ERROR", error);
    });
  }

  /* FUNCTION IS RUN WHEN CREATING AN ACCOUNT */
  function CreateAccountFunction(e) {
    e.preventDefault();
    const email = e.currentTarget.createEmail.value;
    const password = e.currentTarget.createPassword.value;
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function(response) {
      setLoggedIn(true);
    })
    .catch(function(error) {
      console.warn('ACCOUNT CREATION FAILED', error);
    })
  }

  let trailsArray = [
    {name: "Great Eastern", code: "Great_Eastern", link: "/review/Great_Eastern", level: "circle"},
    {name: "Bear Cub", code: "Bear_Cub", link: "/review/Bear_Cub", level: "circle"}, 
    {name: "Chute", code: "Chute", link: "/review/Chute", level: "square"},
    {name: "Bear Claw", code: "Bear_Claw", link: "/review/Bear_Claw", level: "square"},
    {name: "Breakaway", code: "Breakaway", link: "/review/Breakaway", level: "diamond"},
    {name: "Wildfire", code: "Wildfire", link: "/review/Wildfire", level: "diamond"}
];

/* DON'T LOAD PAGE UNTIL LOADING IS FINISHED */
  if(loading) return null;

  return (
  <div className="App">
    <Header loggedIn={loggedIn} LogoutFunction={LogoutFunction} userInformation={userInformation}/>
    <div className="NonHeader">
    <Router>

      {/* LOGIN */}
      <Route exact path="/login">
        {!loggedIn ? (
          // if user is not logged in go to Login
          <Login LoginFunction={LoginFunction} />
        )  : (
          // otherwise go to UserProfile
          <Redirect to="/"/>
        )}
      </Route>

      {/* CREATE ACCOUNT */}
      <Route exact path="/create-account">
        {!loggedIn ? (
          // if user is not logged in go to CreateAccount
          <CreateAccount CreateAccountFunction={CreateAccountFunction}/>
        ) : (
          // otherwise go to UserProfile
          <Redirect to="/"/>
        )}
      </Route>

      {/* USER PROFILE */}
      <Route exact path="/">
        {!loggedIn ? (
          // if user is not logged in go to login
          <Redirect to="/login" />
        ): (
          // otherwise go to UserProfile
          <UserProfile userInformation={userInformation} />
        )}
      </Route>

      {/* TRAILS */}
      <Route exact path="/trails">
        <Trails trailsArray={trailsArray}/>
      </Route>
      
      {/* APRES SKI */}
      <Route exact path="/apres_ski">
        <Apres  />
      </Route>

      {/* REVIEWS */}
      <Route exact path="/review/:name">
        {!loggedIn ? (
          <Redirect to="/login" />
        ): (
          <LeaveAReview userInformation={userInformation} trailsArray={trailsArray}/>
        )}
      </Route>
    </Router>
    </div>
  </div>
  );
}

export default App;