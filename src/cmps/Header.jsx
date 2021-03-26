import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from '../assets/imgs/logo.png';
import home from '../assets/imgs/home_icon.svg';


class _Header extends Component {
    render() {
        return <header>
            <nav>
                <NavLink exact to="/"><img src={logo} alt="logo" class="logo"/></NavLink>
                <NavLink to="/login"><img src={home} alt="home" class="home"/>Home</NavLink>
                <NavLink exact to="/">Browse</NavLink>
                <NavLink to="/chat">Liked songs</NavLink>
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