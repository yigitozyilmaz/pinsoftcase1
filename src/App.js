import './App.css';
import Home from './hotel/hotellist.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Rooms from './rooms/rooms.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Rooms" component={Rooms} />
      </Switch>
    </Router>
  );
}

export default App;
