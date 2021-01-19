import React from 'react';
import { connect } from 'react-redux';
import { input } from 'bulma';

import '../styles/Body.scss';

const Body = () => {
    return (
        <div className="body">
            <div className="body-search">
                <form action="">
                    <input className="body-search-input" type="text" value="" placeholder="Text input" />
                    <button className="button is-primary is-large">OK!</button>
                </form>
            </div>
        </div>
    );
}
const mapState = (state) => ({
});

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(Body);
