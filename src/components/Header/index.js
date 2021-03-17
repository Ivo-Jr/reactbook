import React, { Component } from 'react';
import facebook from '../../assets/facebook.png'
import Button from '../Button'

import './styles.css'

export default class Header extends Component {
    render() {
        return(
            <nav className="Menu">
                    <img className="logo" src={facebook} alt="facebook logo"/>
                    <Button />
            </nav>
        )

    }
}