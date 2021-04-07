import React, { Component } from 'react'
import Backward from "../assets/imgs/backward.svg";
import Forward from "../assets/imgs/forward.svg";
import Pause from "../assets/imgs/pause.svg";
export  class ActionBar extends Component {
    render() {
        return (
            <div className="action-bar">
            <div>
            <img src="" alt=""/>
            <p></p>
            <p></p>
            </div>
            <div className="action-btns">
                <img src={Backward} alt=""/>
                <img src={Forward} alt=""/>
                <img src={Pause} alt=""/>
            </div>
            <div className="volume">

            </div>
            </div>
        )
    }
}
