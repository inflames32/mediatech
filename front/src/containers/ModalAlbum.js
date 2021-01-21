import React from 'react';
import { connect } from 'react-redux';
import { input, modal } from 'bulma';

import { createAlbum } from '../store/actions';



const ModalAlbum = (openModal, onChange, data) => {
    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        onChange({
            [name]: value,
        });
    }

    return (
        <div className="modal">
            <div class="modal-background"></div>
            <div className="modal-content">
                <form className="modal-form">
                    <input className="modal-form-input-title" type="text" name="title" value={createAlbum.title} placeholder="Text input" onChange={handleInputChange} />
                    <input className="modal-form-input-band" type="text" name="band" value="" placeholder="Text input" onChange={handleInputChange} />
                    <input className="modal-form-input-year" type="text" name="year" value="" placeholder="Text input" onChange={handleInputChange} />
                    <input className="modal-form-input-image" type="text" name="image" value="" placeholder="Text input" onChange={handleInputChange} />
                    <input className="modal-form-input-infos" type="text" name="infos" value="" placeholder="Text input" onChange={handleInputChange} />
                    <input className="modal-form-input-track" type="text" name="track" value="" placeholder="Text input" onChange={handleInputChange} />
                    <button className="button is-primary is-large">OK!</button>
                </form>
                <button class="modal-close is-large" aria-label="close"></button>
            </div>
        </div >
    );
}
const mapState = (state) => ({
    title: state.data.createAlbum.title,
    band: state.data.createAlbum.band,
    year: state.data.createAlbum.year,
    image: state.data.createAlbum.image,
    infos: state.data.createAlbum.infos,
    track: state.data.createAlbum.track,
});

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(ModalAlbum);
