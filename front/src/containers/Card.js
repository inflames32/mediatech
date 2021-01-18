//import { connect } from 'react-redux';
import React from 'react';
import { connect } from 'react-redux';
import jaquette from '../assets/images/R-2718462-1297931665.jpeg';

const Card = () => {
    return (
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img
                        src={jaquette}
                        alt="Placeholder image" />
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img
                                src="https://bulma.io/images/placeholders/96x96.png"
                                alt="Placeholder image" />
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">John Smith</p>
                        <p class="subtitle is-6">@johnsmith</p>
                    </div>
                </div>

                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                            <a>@bulmaio</a>.
                            <a href="#">#css</a>
                    <a href="#">#responsive</a>
                    <br />
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
        </div>
    );
}

const mapState = (state) => ({
});

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(Card);

