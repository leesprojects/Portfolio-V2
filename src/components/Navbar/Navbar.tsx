import                                 './Navbar.css'
import { BrowserRouter, NavLink } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <nav className='App-Navbar'>
      <BrowserRouter>
        <NavLink to='/Home'></NavLink>
        <NavLink to='/LandingPage'>Landing Page</NavLink>
        <NavLink to='/Angular'>Angular</NavLink>
        <NavLink to='/React'>React</NavLink>
        <NavLink to='/ThreeJS'>ThreeJS</NavLink>
        <NavLink to='/GameDev'>GameDev</NavLink>
        <NavLink to='/Robotics'>Robotics</NavLink>
      </BrowserRouter>
    </nav>
  );
}

export default AppNavbar;