import { render } from '@testing-library/react';
import React from 'react';
import Menu from './Menu';
import './Navbar.css';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

class Navbar extends React.Component
{
    render()
        {
            return(
                <nav className="NavbarItems">
                     <ul>
                        {Menu.map((item,index) =>{

                            return(
                            <li key={index} ><a className="item.cName" href="item.url">{item.title}</a></li>
                            ) 
                             })}
                    </ul> 
                 </nav>  
                     )
        }
}
export default Navbar



// class Navbar extends React.Component {
//     render() {
//         return (
//             <div class="container">
//                 <nav>
//                   <Link to="/App">Search</Link>
//                   <Link to="/Counter">Counter</Link>
//                 </nav>
//                 <Route
//                     path="/App"
//                     component={App}
//                     exact 
//                 />
//                 <Route
//                     path="/Counter"
//                     component={Counter} 
//                 />
//             </div>
//         );
//     }
// }
// export default Navbar
