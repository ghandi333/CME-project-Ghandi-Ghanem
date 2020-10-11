import React from  'react' ;
import ReactDOM from 'react-dom';
import App from './components/App';
import Navbar from './components/Navbar/Navbar';
import './index.css'


ReactDOM.render(
    <React.Fragment>
    <Navbar />   
    <App />
    </React.Fragment>,
document.querySelector('#root'));


