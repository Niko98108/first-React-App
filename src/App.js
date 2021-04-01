import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NameList from './Components/Pages/NameList/NameList';
import HeaderBar from './Components/Templates/Header';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';



const App =() =>{
  return (
    <div>
      <BrowserRouter>
         <HeaderBar/>
         <Switch>

           <Route path="/about">
            <About/>
           </Route>

           <Route path="/nameList">
            <NameList/>
           </Route>

           <Route path="/">
            <Home/>
           </Route>
           
         </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
