import {
  Router,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import FilesPage from './pages/files';
import HomePage from './pages/home';

function App() {
  return (
    <div className="App">
      <Route exact path="/"><HomePage /></Route>
      <Route path="/files"><FilesPage /></Route>
    </div>
  );
}

export default App;
