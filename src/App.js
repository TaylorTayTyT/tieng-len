
import "./App.css"
import Card from "./Components/Card";
import Board from "./Components/Board";
const canvas = document.getElementById("canv");

function App() {
  return (
    <div>
      <div className="headerTitle">
        <h1>Tieng Len</h1>
      </div>
      <div className = "card">
        <Card
          ctx = {canvas}
        />
      </div>
    </div>
  )

}

export default App;
