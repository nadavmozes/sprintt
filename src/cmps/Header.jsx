import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from '../assets/imgs/logo.png';
import home from '../assets/imgs/home_icon.svg';
import browse from '../assets/imgs/browse.svg';
import likedsongs from '../assets/imgs/likeds.svg';


class _Header extends Component {
    render() {
        return <header>
            <nav>
                <NavLink exact to="/"><img src={logo} alt="logo" className="logo"/></NavLink>
                <NavLink to="/"><img src={home} alt="home" className="home"/>Home</NavLink>
                <NavLink exact to="/browse"><img src={browse} alt="browse" className="browse"/>Browse</NavLink>
                <NavLink to="/liked-songs"><img src={likedsongs} alt="liked-songs" className="liked-songs"/>Liked songs</NavLink>
            </nav>
        </header>
    }

}
const mapStateToProps = state => {
    return {
        loggedInUser: state.userModule.loggedInUser
    }
}
const mapDispatchToProps = {}


export const Header = connect(mapStateToProps, mapDispatchToProps)(_Header)