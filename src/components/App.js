import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import SearchPage from './SearchPage';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={SearchPage} />
          {/* <Route path="/event" component={TodoItem} />
          <Route path="/artist" component={TodoItem} /> */}
        </BrowserRouter>
    </div>
  );
}

export default App;
