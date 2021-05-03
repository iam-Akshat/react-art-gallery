import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ArtGrid from '../containers/ArtGrid';
import ArtDetail from './ArtDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <h1 className="text-center">
              {' '}
              Art Gallery
              <span role="img" aria-label="pallete">🎨</span>
            </h1>
            <ArtGrid />
          </Route>
          <Route path="/artwork/:id">
            <ArtDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
