import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Items from "./components/Items";
import Seasons from "./components/Seasons";
import Findus from "./components/Findus";

function App() {
  return (
    <div>
      <Navbar/>
      <Filter/>
      <Items/>
      <Seasons/>
      <Findus/>
    </div>
  );
}

export default App;
