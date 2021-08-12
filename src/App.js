import { Route } from 'react-router-dom';

import {Auth, Home} from "./pages";


function App() {
  return (
    <div className="wrapper">
        <Route exact path={['/', '/login', '/register']} component={Auth}/>
        <Route path="/im" component={Home}/>
    </div>
  );
}

export default App;
