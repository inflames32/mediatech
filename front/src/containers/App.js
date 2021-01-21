import React from 'react';
import { Provider, connect, } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Homepage from './Homepage';
import ModalAlbum from './ModalAlbum';
import store from '../store';
import '../styles/reset.css';
import '../styles/App.css';

//import { button } from 'bulma';


function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/addAlbum" component={ModalAlbum} />
      </Switch>
    </Provider>
  );
}

const mapState = (state) => ({
});

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(App);


