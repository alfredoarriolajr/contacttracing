import './App.css';
import HomeComponent from './components/HomeComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CheckinComponent from './components/CheckinComponent'


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={HomeComponent} />
          <Route path='/checkin' exact component={CheckinComponent} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
