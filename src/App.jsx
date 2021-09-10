import Topbar from "./components/topbar/Topbar"; 
import Intro from "./components/intro/Intro"
import Menu from "./components/menu/Menu"
import Porto from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Contacts from "./components/contacts/Contacts"
import "./app.scss"
import {useState} from "react";
function App() {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Porto/>
        <Works/>
        <Contacts/>
      </div>
     

    </div>
  );
}

export default App;
