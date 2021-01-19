import React from 'react';
//import { button } from 'bulma';
import '../styles/Footer.scss';
const Footer = () => {
    return (
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    <strong>Mediatech</strong> by <a href="https://jgthms.com">Romain Geneau</a> and <a href="https://jgthms.com">Cahuzac pierre</a>. The source code is licensed
            <a href="https://github.com/inflames32/mediatech">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
            </div>
        </footer>
    );
}
export default Footer;
