import React from 'react';

function Header({ loggedIn, LogoutFunction, userInformation }) {
    return (
        <header className="Header">
            <div className="siteTitle">
                <h1>Ski Stuff</h1>
            </div>
            <nav>
                <a href="/trails">Trails</a>
                <a href="/attractions">Attractions</a>
            </nav>
            <nav>
                { loggedIn ? (
                    <>
                        <a href="/">{userInformation.email}</a>
                        <a onClick={() => LogoutFunction()}>Logout</a>
                    </>
                ) : (
                    <>
                        <a href="/login">Login</a>
                        <a href="/create-account">Create Account</a>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;