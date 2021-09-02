<<<<<<< HEAD
import LogIn from "./components/Login/LogIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Client from "./components/Client/client";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path={"/"} component={LogIn} />
				{/* <Route  path="/signup" component={SignUp} /> */}
				<Route excat path={"/client"} component={Client} />
			</Switch>
		</Router>
	);
}

export default App;
=======
import SignupForm from './components/Signup/SignupForm';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
	return (


		<Router>
			<Switch>

				<Route path={"/signup"} component={SignupForm} />

			</Switch>

		</Router>



	);
}

export default App;
>>>>>>> oliver-task
