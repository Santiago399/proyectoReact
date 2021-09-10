import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Contenedor from './Contenedor';
import Header from './Header';
import Footer from './Footer';


ReactDOM.render( 
    <Header/> ,
    document.getElementById('header')
);

ReactDOM.render( 
    <Contenedor/> ,
    document.getElementById('contenedor')
);
ReactDOM.render( 
    <Footer/> ,
    document.getElementById('footer')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();