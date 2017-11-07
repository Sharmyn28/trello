import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

const Head = () => {
    return (
        <header className="main-header">
            <nav id="boards_nav">
                <ul>
                    <li>
                        <a href="#"><i className="fa fa-columns"></i><span> Boards</span></a>
                    </li>
                </ul>
            </nav>
            <a href="/"><span className="logo"></span></a>
            <nav className="right">
                <ul>
                    <li>
                        <a className="current-user">
                            <img alt="Gravatar for john@phoenix-trello.com" src="//www.gravatar.com/avatar/6a88cfcf7b76267b129b8dc477c4105e?d=retro&amp;r=g&amp;s=50" srcset="//www.gravatar.com/avatar/6a88cfcf7b76267b129b8dc477c4105e?d=retro&amp;r=g&amp;s=100 2x" height="50" width="50" className="react-gravatar react-gravatar" />
                            <span></span>
                            <span>John Doe</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-sign-out"></i><span> Sign out</span></a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Head;