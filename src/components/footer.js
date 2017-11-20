import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/style.css';

const Footer = () => {
    return (
        <footer id="main_footer">
            <small>
                <a href="https://trello.com/" target="_blank">Trello</a> tribute for educational purposes
                    crafted with ♥ for <a href="https://diacode.com/">Diacode</a>
                by <a href="https://twitter.com/bigardone">@bigardone</a>
            </small>
        </footer>
    )
}

export default Footer;