import React from 'react';

function Header({ loggedIn, LogoutFunction, userInformation }) {
    return (
        <header className="Header">
            <div className="siteTitle">
                <h1>Rate Killington</h1>
            </div>
            <div className="navbar">
                <nav className="navAccount">
                    { loggedIn ? (
                        <>
                            <a className="account" href="/">My Account</a>
                            <a className="logout" onClick={() => LogoutFunction()}>Logout</a>
                        </>
                    ) : (
                        <>
                            <a className="login" href="/login">Log In</a>
                            <a className="signup" href="/create-account">Sign Up</a>
                        </>
                    )}
                </nav>
                <nav className="navPages">
                    <a className="trails" href="/trails">Trails</a>
                    <a className="apres" href="/apres_ski">Apres Ski</a>
                </nav>
            </div>
            
        </header>
    );
}

export default Header;