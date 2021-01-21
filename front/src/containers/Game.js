import React from 'react';
import { button } from 'bulma';
import games from '../assets/games.json';
import '../styles/Game.scss';

const Album = () => {
    return (
        <div className="game">
            <ul className="game-list">
                {
                    games.map((game) => (
                        <li key={game.id} className="game-list-item">
                            <img src={game.jaquette} className="game-list-item-img" alt={game.jaquette} />
                            <div className="game-list-item-info">
                                <div key={game.id}>
                                    <div>{game.name}</div>
                                    <div>{game.launch}</div>
                                    <div>{game.hardware}</div>
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
