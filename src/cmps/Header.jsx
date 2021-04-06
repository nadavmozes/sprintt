import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/imgs/logo.png';
import home from '../assets/imgs/home_icon.svg';
import browse from '../assets/imgs/browse.svg';
import likedsongs from '../assets/imgs/likeds.svg';


export class Header extends React.Component {

    render() {
        return <header className="nav-bar">
            <img src={logo} alt="logo" className="logo" />
            <nav>
                <NavLink to="/">
                    <div className="home">
                        <img src={home} alt="home" />
                        <p>Home</p>
                    </div>
                </NavLink>
                <NavLink to="/browse">
                    <div className="browse">
                        <img src={browse} alt="browse" />
                        <p>Browse</p>
                    </div>
                </NavLink>
                <NavLink to="/liked-songs">
                    <div className="liked-songs">
                        <img src={likedsongs} alt="liked-songs" />
                        <p>Liked songs</p>
                    </div>
                </NavLink>
            </nav>
        </header>
    }

}
