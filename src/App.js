import './App.css';
import Home from './views/Home';
import Gallery from './views/Gallery';
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
