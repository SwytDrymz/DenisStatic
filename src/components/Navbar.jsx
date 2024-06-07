import './Navbar.css'

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/">Denis Vlček</a>
        </div>
        <ul className="navbar-links">
          <li><a href="/">IG</a></li>
          <li><a href="/about">FB</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar