import React from 'react';
import {
  Router,
  Link,
} from '@reach/router';
import { Search } from './components';
import './App.css';

const Home = () => (
  <>
    <main className="Home">
      <h1 className="Home__heading">
        Shipping with Confidence
      </h1>
      <h2 className="Home__subheading">
        Testing React Apps
      </h2>
    </main>
    <footer className="Home__footer">
      <div>
        <h3 className="Home__demo">
          <Link to="/testing-react-apps-talk/search">
            View the Demo
          </Link>
        </h3>
      </div>
      <div>
        <h3 className="Home__social">
          <a href="https://twitter.com/benjamminj">
            @benjamminj
          </a>
        </h3>
        <h3 className="Home__social">
          <a href="https://twitter.com/hashtag/javascriptla?src=hashtag_click">
            #javascriptla
          </a>
        </h3>
      </div>
    </footer>
  </>
);

const App = () => (
  <Router>
    <Home
      path="/testing-react-apps-talk/"
      default
    />
    <Search path="/testing-react-apps-talk/search/" />
  </Router>
);

export default App;
