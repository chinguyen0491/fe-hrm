import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Header from './Components/Header/Header';
import Pages1 from './Pages/Pages1';
import Pages3 from './Pages/Pages3';

function App() {
  return <>
    <Header />
    <Switch >
      <Route exact path="/">
        <Pages1 />
      </Route>
      <Route exact path="/hoi-dap">
        <Pages3 />
      </Route>
    </Switch>
  </>
}

export default App;
