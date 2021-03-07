import React,{ Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Component/Home/Home';
import LeaBio from './Component/LeaBio/LeaBio';
import NavigationBar from './Component/NavigationBar/NavigationBar';
import Works from './Component/Works/Works';
import Contact from'./Component/Contact/Contact';

class App extends Component {

  render() {
    return (
        <Router>
          <div className="App">
            <NavigationBar/>
           
            <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/LeaBio' component={LeaBio}/>
          <Route path='/Works' component={Works}/>
          <Route path='/Contact' component={Contact}/>
          </Switch>
          </div>
        </Router>
);
    }
  }


// class App extends Component {
//   render() {
//     return (
//         <Router>
//           <div className="App">
//             <NavigationBar/>
//             {/* <Home/> */}
//             <Switch>
//           <Route exact path='/' component={Home}/>
//           <Route path='/LeaBio' component={LeaBio}/>
//           <Route path='/Works' component={Works}/>
//           <Route path='/Contact' component={Contact}/>
//           </Switch>
//           </div>
//         </Router>
               
//     );
//   }
// }
//           const AppOne = () => {
//           return (
//           <div className="App">                 
//               <Contact/>           
//           </div>
          
//   );
// }
export default App;
