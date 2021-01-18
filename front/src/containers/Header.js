import React from 'react';
import { button } from 'bulma';

const Header = () => {
    return (
        <div className="header">
            <input class="input" type="text" placeholder="Text input"></input>
            <button className="button is-primary is-large">OK!</button>
        </div>
    );
}
export default Header;
