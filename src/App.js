import "./App.css";
import Container from "./Components/Container/Container";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="user-detail">Users Details</div>
      <Container />
    </div>
  );
}

export default App;
