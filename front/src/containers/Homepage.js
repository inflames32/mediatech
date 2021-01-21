import React from 'react';
import { connect } from 'react-redux';
import { input } from 'bulma';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Album from './Album';
import Game from './Game';
import ModalAlbum from './ModalAlbum';

import '../styles/Homepage.scss';

const Homepage = (openModal,) => {

    const BtnAddAlbum = () => {
        console.log("j'ouvre la modale pour créer un album");
        <ModalAlbum />
    }
    return (
        <div className="homepage">
            <Header />
            <ModalAlbum />
            <div className="body">
                <div className="body-search">
                    <input className="body-search-input" type="text" placeholder="Text input" />
                    <button className="button is-primary is-large">OK!</button>
                    <button className="button is-primary is-large" onClick={BtnAddAlbum}>+</button>
                </div>
                <Album />
                <Game />
            </div>
            <Footer />
        </div >
    );
}
const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(Homepage);
