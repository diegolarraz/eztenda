import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
