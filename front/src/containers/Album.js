import React from 'react';
import { button } from 'bulma';
import data from '../assets/data.json';
import '../styles/Album.scss';

const Album = () => {
    const datas = data.albums;
    return (
        <div className="album">
            <ul className="album-list">
                {
                    datas.map((data) => (
                        <li key={data.id} className="album-list-item">
                            <img src={data.jaquette} className="album-list-item-img" alt={data.jaquette} />
                            <div className="album-list-item-info">
                                <div key={data.id}>
                                    <div>{data.title}</div>
                                    <div>{data.infos}</div>
                                    <div>Titres: {data.tracks}</div>
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
