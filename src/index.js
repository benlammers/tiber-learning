import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker'

import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/about/About'
import Team from './pages/Team'
import Contact from './pages/Contact'
import GetStarted from './pages/GetStarted';

import './sass/main.scss'

//Context
import InfoContextProvider from './contexts/InfoContext';

class App extends Component {

    render(){
        return (
            <div className="App">
                <InfoContextProvider>
          		<BrowserRouter>
                    <ScrollToTop>
                        <Header />
                        <Switch>
                            <Route path='/' component={Home} exact />
                            <Route path='/about' component={About} />
                            <Route path='/team' component={Team} />
                            <Route path='/get-started' component={GetStarted} />
                            <Route path='/contact' component={Contact} />
                        </Switch>
                        <Footer />
                    </ScrollToTop>
                </BrowserRouter>
                </InfoContextProvider>
            </div>
          )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
