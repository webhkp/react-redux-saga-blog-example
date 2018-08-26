import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/styles/app.scss';
import Navigation from "./components/common/navigation";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import User from './components/pages/user';
import Home from './components/pages/home';
import Article from './components/pages/article';
import Header from './components/common/header';
import NotFound from './components/pages/not-found';
import About from './components/pages/about';

const App = ({store}) => (
    <div className="App container">
        <Provider store={store}>
            <Router>
                <div>
                    <Header />
                    <Navigation />
            
                    <div>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/user" exact component={User} />                        
                            <Route path="/about" exact component={About} />       
                            <Route path="/not-found" exact component={NotFound} />                        
                            <Route path="/:slug" exact component={Article} />
                        </Switch>
                    </div>
                </div>
            </Router>
        </Provider>
    </div>

)

export default App

