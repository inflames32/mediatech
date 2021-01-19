import React from 'react';
import { button } from 'bulma';
import '../styles/Header.scss'

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">Mediatech</div>
            <div className="header-login">
                <button className="header-login-signupbtn button is-small is-warning">Inscription</button>
                <button className="header-login-loginbtn button is-small is-success">Connexion</button>
            </div>
        </div>
    );
}
export default Header;
