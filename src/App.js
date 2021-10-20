import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Link } from "react-router-dom";

function App() {

  const Home = () => <div><h2>Home</h2></div>
  const About = () => <div><h2>About</h2></div>

  return (
    <HashRouter basename='/'>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </HashRouter>
  );
}

export default App;
