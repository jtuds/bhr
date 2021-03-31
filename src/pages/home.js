import {
  Link,
} from "react-router-dom";
import logo from '../logo.svg';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="e-homepage-link">
          <Link to="/files">View all files > </Link>
        </div>
      </header>

    </div>
  );
}

export default HomePage;
