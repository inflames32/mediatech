import { CREATE_ALBUM } from '../../actions';

const initialState = {
    createAlbum: {
        title: "",
        band: "",
        year: "",
        image: "",
        infos: "",
        track: "",
    }
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case CREATE_ALBUM:
            return {
                ...state,
                createAlbum: [...action.payload],
            }
        default:
            return state;
    }
};
