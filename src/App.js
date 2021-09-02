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
