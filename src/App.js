import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="app" style={{display:'flex', flexDirection:'column'}}>
      <div className="navContainer">
        <NavBar />
      </div>

      <div className='mainContainer'>
        <ItemListContainer greeting={<h2>greeting</h2>} />
      </div>
    </div>
  );
}

export default App;
