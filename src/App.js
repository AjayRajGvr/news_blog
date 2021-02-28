import React from 'react';
import './App.css'; 
 import {BrowserRouter}  from 'react-router-dom';
 import {Route} from 'react-router-dom';
import Header from './components/header/header.component'
import HomePage from './components/homepage/homepage.component';
import Trending from './components/trending/trending.component';

function App() {
  return (
    
<div>
<BrowserRouter>
<Header/>
<Route exact path='/' component={HomePage}/>
<Route path = '/trending' component={Trending}/>
</BrowserRouter>




</div>
  );
}

export default App;
