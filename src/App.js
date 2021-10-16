import LogIn from "./components/Login/LogIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Client from "./components/Client/client";
import SignupForm from "./components/Signup/SignupForm";

function App() {
  return (
    <Router basename="/Slack-CloneV2">
      <Switch>
        <Route exact path={"/"} component={LogIn} />
        <Route path={"/signup"} component={SignupForm} />
        <Route path={"/client"} component={Client} />
      </Switch>
    </Router>
  );
}

export default App;
