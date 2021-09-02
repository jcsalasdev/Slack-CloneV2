import SignupForm from './components/Signup/SignupForm';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
    
        <Router>
		<Switch>
				
				<Route  path={"/signup"} component={SignupForm} />
				
			</Switch>

		</Router>
     
   
    </div>
  );
}

export default App;
