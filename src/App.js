import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import AccountDetail from './components/AccountDetail';

function App() {
  return (
    <div>
      <Switch>

        <Route path="/contact/:id">
          {/* <Contact /> */}
        </Route>

        <Route path="/detail">
          <AccountDetail />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
