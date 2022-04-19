import './styles.css';
import 'bootstrap/js/src/collapse.js';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary nav-container">
      <div className="container-fluid">
        <div className="nav-logo-text">
          <h4>MovieFlix</h4>
        </div>

        <div className="nav-login-logout">
          <a href="/login">LOGIN</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
