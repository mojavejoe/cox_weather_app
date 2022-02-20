import "./App.css";
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Joe's Weather Rock</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer></footer>
    </div>
  );
}
export default App;