import NavBar from "./Navbar"
import Jumbotron from "./Jumbotron"
import AccountList from "./AccountList";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <NavBar/>
      <Jumbotron/>
      <AccountList/>
      <Footer/>
    </div>
  );
}

export default Home;