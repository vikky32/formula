import React from 'react';
import {Switch, Route} from 'react-router-dom'

// blocks
import AppBar from './main/header.jsx';
import FooterBar from './main/footer.jsx';

// pages
import Home from "./home/index.jsx";
import Contact from "./contact/index.jsx";


// styles
import '../css/app.scss';

// app
export default class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <AppBar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>

                <FooterBar/>
            </div>
        )
    }
}