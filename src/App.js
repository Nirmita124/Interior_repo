import './App.css';
import React, {Component} from 'react';
import { Route, Switch, Link } from "react-router-dom";
import Home from './components/home';
import Work from './components/work';
import Contact from './components/contact';
import Logo from './new-logo.png';
import FullLogo from './new-logo.jpeg';
import Bedroom from './Bedroom.jpg';
import Dining from './Dining-room.jpg';
import Living from './Living-Room.jpg';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {text: ""}
  }

  render(){
    return(
      <div>
        <Switch>
          {/* <Route exact path="/"> <Home /> </Route> */}
          <Route path="/work"> <Work /> </Route>
          <Route path="/contact"> <Contact /> </Route> 
        </Switch>
                
      <div className="navbar">
        <img src={Logo} alt="Logo" className="logo" />
        <Link exact to="/" className="navBarLink">Home</Link>
        <Link to="/work" className="navBarLink">Design Gallery</Link>
        <Link to="/work" className="navBarLink">Recent Projects</Link>
        <Link to="/work" className="navBarLink">About Us</Link>
        <Link to="/contact" className="navBarLink">Contact</Link>
      </div>
      <header className="img_prop"></header>      
      <div className="App App-header">
        <p className="App-headline1">Welcome to Interior Inland</p>
        <p className="App-headline">The ISLAND where you can foresee your dream home and make it in the world of REALITY</p>
      </div>
      <div>
        <p className="statement">Statement interiors</p> <br />
        <div>
          <img src={Dining} alt="Dining" className="dining" />
          <img src={Bedroom} alt="Bedroom" className="bedroom" />
          <img src={Living} alt="Living" className="living" />
        </div>
      </div>
      <div className="empty-div"></div>
      <div className="site-info colCount">
          <img src={FullLogo} alt="Logo" className="full-logo" />
          <p className="heading-font">Get in touch</p>
          <p className="content-font">
            Call us : +91 7059687372 <br/> Email us : interiorinland@gmail.com
          </p>
          <p className="heading-font">Location</p>
          <p className="content-font">
            Kolkata city
          </p>
          <p className="heading-font"><b>Offering Area</b></p>
          <p className="content-font">
            All over West Bengal
          </p>
          <p className="heading-font"><b>Design Idea</b></p>
          <p className="content-font">
            Renovate home | Office interior | Bunglow Decore
          </p>
          <p className="heading-font"><b>Key Features</b></p>
          <p className="content-font">
            <ul>
              <li>Living and Dinning space</li><br />
              <li>Set up your Kitchen</li><br />
              <li>Luxuriate your Bedroom</li><br />
              <li>Kid's room decore</li><br />
              <li>Kitchen and Wordrobe Cabinets</li>
            </ul>
          </p>
          <br/><br/>
          {/* <div>
            <p className="heading-font"><b>Developer and Website designer</b></p>
            <pre className="content-font">
              Nirmita De<br/>
              Contact : +91 7686984823 || Email : de.nirmita@gmail.com
            </pre>
          </div> */}
      </div>
    </div> 
    )
  }
  
}

export default App;


    // addReminders(){
    //   console.log('this.state',this.state)
    // }
    // render(){
    //   return (
    //     <div>
    //       <div>
    //         <input placeholder="I have to..." onChange={event=> this.setState({text: event.target.value})}/>
    //       </div>
    //       <div> 
    //         <button type="button" onClick={()=>this.addReminders()}>Add Reminder</button>
    //       </div>
    //     </div>
    //     )
    // }