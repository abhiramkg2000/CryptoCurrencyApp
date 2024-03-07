import "./styles.css";
import CryptoCurrency from "./components/CryptoCurrency/CryptoCurrency";
import ScrollToTop from "react-scroll-to-top";
import Charts from "./components/chart/Charts";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import ScrollTop from "./components/scrolltop/ScrollTop";
export default function App() {
  return (
    <div className="App">
      <Router>
        <ScrollTop />
        <nav className="bg-dark">
          <ul>
            <li className="btn btn-secondary" style={{ margin: "5px" }}>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={CryptoCurrency} />
          <Route path="/Charts" exact component={Charts} />
        </Switch>
        <div>
          <ScrollToTop smooth color="#6f00ff" />
        </div>
      </Router>
    </div>
  );
}
