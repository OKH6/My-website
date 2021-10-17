import Topbar from "./components/topbar/Topbar"; 
import Intro from "./components/intro/Intro"

import Menu from "./components/menu/Menu"
import Porto from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Contacts from "./components/contacts/Contacts"
import About from "./components/about/About"
import "./app.scss"
import {useState} from "react";



function App() {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     
      <div className="sections">
       

        <Intro className="a"/>
        <About/>

        <Porto className="a"/>
        <Works className="b"/>
        <Contacts className="b"/>


      </div>
     

    </div>
  );
}

export default App;
