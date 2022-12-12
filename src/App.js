import './App.css';
import Home from './routes/home/Home';
import Login from './routes/login/Login';
import { Route } from "react-router-dom"
import Pdp from './routes/pdp/Pdp';


function App() {
  return (
    <div className="App"> 

      <Route exact path="/"> 
        <Home/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/:id">
          <Pdp/>
      </Route>
    </div>
  );
}

export default App;
