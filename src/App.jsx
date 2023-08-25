import "./App.css";
import Navbar from "./components/Navbar";
import WordMeaning from "./components/WordMeaning";
import Input from "./components/Input";

function App() {
  return (
    <div className="container col-sm-9 col-md-6">
      <Navbar />
      <Input />
      <WordMeaning />
    </div>
  );
}

export default App;
