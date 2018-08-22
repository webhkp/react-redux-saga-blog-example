import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/styles/app.css';
import Navigation from "./components/common/navigation";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import User from './components/pages/user';
import Home from './components/pages/home';
import Article from './components/pages/article';

const App = ({store}) => (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section className="App-body">
            <Provider store={store}>
                <Router>
                    <div className="mainRouterArea">
                        <Navigation />

                        <Route path="/" exact component={Home} />
                        <Route path="/user" exact component={User} />
                        <Route path="/:slug" exact component={Article} />
                    </div>
                </Router>
            </Provider>
        </section>
      </div>
)

export default App

