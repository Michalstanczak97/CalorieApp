import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Calculator from "./components/Calculator";
import Metabolism from "./components/Metabolism";
import Chapter from "./components/Chapter";
import FoodComponents from "./components/FoodComponents";
import Result from "./components/Result";
import Footer from "./components/Footer";


function App() {
    const [result, setResult] = useState("")
  return (
      <Router>
      <Header/>
          <Banner/>
          <Metabolism/>
          <Chapter/>
          <FoodComponents/>
          <Calculator getResult={setResult}/>
          <Result finishResult={result}/>
          <Footer/>
      </Router>
  );
}

export default App;
