import React from 'react';
import { button } from 'bulma';

import Card from './Card';

const Album = () => {
    return (
        <div className="album">
            <Card />
            <button className="button is-primary is-large">OK!</button>
        </div>
    );
}
export default Album;
