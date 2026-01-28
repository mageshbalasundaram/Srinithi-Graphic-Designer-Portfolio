import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import AnnualMeet from './pages/annualMeet'
import Layout from './layout'

const App = () => {
  return (

    <Routes>
       <Route element={<Layout />}>
      <Route path="/" element ={<Home/>}/>
      <Route path="/timac-agro-annual-meet" element={<AnnualMeet/>}/>
      </Route>

    </Routes>
    
  );
};

export default App