import './App.scss';
import ListView from './components/list-view';
import Upload from './components/upload';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer
        autoClose={500000}
        hideProgressBar={true} />
      <Router>
        <div className="nav-bar">
          <ul className="nav-item-container">
            <li >
              <Link className="nav-item" to="/">Home</Link>
            </li>
            <li >
              <Link className="nav-item" to="/upload">Upload</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path="/">
            <ListView></ListView>
          </Route>
          <Route path="/upload">
            <Upload></Upload>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
