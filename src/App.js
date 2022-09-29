import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from "./components/Main/Main";
import Toolbar from "./components/Toolbar/Toolbar";

function App() {
  return (
    <div>
      <Toolbar />
      <Main />
    </div>
  );
}

export default App;
