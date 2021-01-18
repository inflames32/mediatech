import axios from 'axios';


import { } from '../actions';

const log = (store) => (next) => (action) => {
    next(action);
};

export default log;
