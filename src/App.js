import logo from './logo.svg';
import './App.css';
import  {useState} from 'react';
import About from './About';
import Contact from './Contact';
import Newcontact from './Newcontact';
import Users from './Users';
import CreateUser from './CreateUser';
import Home from './home'
import {Link,Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
function App() {
  const [name,setName]=useState("VR")
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#features">
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link to="/contact">Contact</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link to="/list">User List</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link to="/create">Create User</Link>
            </Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/list">
            <Users />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/create">
            <CreateUser />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        {/* <About /> */}
        {/* <About name={name}/>
        <button onClick={()=>(setName("anil"))}>Update props</button> */}
        {/* <Contact /> */}
        {/* <Contact name={name} /> */}
        {/* <button ></button> */}
        {/* <button onClick={()=>(setName("anil"))}>Update props</button>  */}
        
        {/* <Newcontact /> */}
        {/* <Users></Users> */}
        {/* <CreateUser /> */}
      </Router>

    </div>
  );
}

export default App;
