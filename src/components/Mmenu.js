import React, { Component } from 'react';
import '../App.sass'
import 'mmenu-js'

class Mmenu extends Component {
    render() {
        return (
            <div className="my-header">
                <nav id="my-menu" className="mm-menu">
                    <ul>
                        <li><a href="/">ГЛАВНАЯ</a></li>
                        <li><a href="/">АККАУНТ</a>
                            <ul>
                                <li><a href="/">МОЙ АККАУНТ</a></li>
                                <li><a href="/">ИЗБРАННОЕ</a></li>
                                <li><a href="/">КОРЗИНА</a></li>
                            </ul>
                        </li>
                        <li><a href="/">КОНТАКТЫ</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Mmenu;