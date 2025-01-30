//import './App.css';

function Header(props) {
  return (
    <>
        <header>
        <img src={props.logo_link} alt=""></img>
        <nav>
          <ul>
            <li>
            <a href="">Home</a>
            </li>
            <li>
            <a href="">About</a>
            </li>
            <li>
            <a href="">Login</a>
            </li>
            <li>
            <a href="">Online reservation</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
