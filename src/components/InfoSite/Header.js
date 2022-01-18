import logo from "../../images/logo.png"

function Header(){
    return (
      <nav className='navbar'>
        <img src={logo} className="nav-logo" />
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>
      </nav>
    )
  }

export default Header;