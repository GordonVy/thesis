import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from "./components/Pages/Homepage";
import Signin from "./components/Pages/Signin";

const App = () => {
    return (
    	<div>
      		<Router>
			    <Switch>
			      <Route exact path="/" component={Homepage} />
			      <Route exact path="/signin" component={Signin} />
			    </Switch>
		  	</Router>
    	</div>
    );
}

export default App;
