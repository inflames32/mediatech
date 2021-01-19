import React from 'react';
import { button } from 'bulma';
import data from '../assets/data.json';
import '../styles/Game.scss';

const Album = () => {
    const games = data.games;
    return (

        <div className="game">
            <ul className="game-list">
                {
                    games.map((data) => (
                        <li key={data.id} className="game-list-item">
                            <img src={data.jaquette} className="game-list-item-img" alt={data.jaquette} />
                            <div className="game-list-item-info">
                                <div key={data.id}>
                                    <div>{data.name}</div>
                                    <div>{data.sortie}</div>
                                    <div>{data.hardware}</div>
                                </div>
                            </div>
                        </li>
                    )
                    )
                }
            </ul>
        </div >
    );
}
export default Album;
