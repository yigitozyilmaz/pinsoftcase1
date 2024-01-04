import './App.css';
import favpage from './favpage.js';
import Home from './hotel/hotellist.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favpage" component={favpage} />
      </Switch>
    </Router>
  );
}

export default App;
