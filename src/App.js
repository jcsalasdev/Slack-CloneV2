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
