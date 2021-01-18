import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import Album from './Album';


const Homepage = () => {
    return (
        <div className="homepage">
            <Header />
            <Album />
            <Footer />
        </div>
    );
}
const mapState = (state) => ({
});

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(Homepage);
