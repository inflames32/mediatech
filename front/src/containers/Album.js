import React from 'react';
//import { button } from 'bulma';
import albums from '../assets/albums.json';
import '../styles/Album.scss';

const Album = () => {
    return (
        <div className="album">
            <ul className="album-list">
                {
                    albums.map((album) => (
                        <li className="album-list-item">
                            <img src={album.jaquette} className="album-list-item-img" alt={album.jaquette} />
                            <div className="album-list-item-info">
                                <div>
                                    <div>{album.band}</div>
                                    <div>{album.title}</div>
                                    {/* <div>{album.infos}</div> */}
                                    <div>Titres: {album.tracks}</div>
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
