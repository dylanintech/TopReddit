import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Header } from './features/Header/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Home /> */}
      </main>
      <aside >
        {/* <Bookmarked /> */}
      </aside>
    
    </>
  );
}

export default App;
