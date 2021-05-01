import NavBar from "./components/Navbar"
import './App.css';
import Jumbotron from "./components/Jumbotron"
import AccountList from "./components/AccountList";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Jumbotron/>
      <AccountList/>
    </div>
  );
}

export default App;
