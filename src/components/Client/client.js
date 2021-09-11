import { Link, useRouteMatch, Route, Switch } from "react-router-dom";
import { useGetUser } from "../../context/UserProvider";
import AsideNav from "./Aside";
import Maker from "../Maker/Maker";
import "./client.css";
import Chat from "../Chat/Chat";
import { useState } from "react";

export default function Client() {
  const user = useGetUser();
  const [flag, setFlag] = useState("initial");
  function generateString() {
    return (Math.random() + 1).toString(36).substring(7);
  }

  function changeFlag() {
    setFlag(generateString());
  }

  const { url } = useRouteMatch();

  if (!user) {
    return (
      <div className="no-user_container">
        <div className="no-user">
          <h1 className="no-user_title">Account has Sign Out</h1>
          <Link to="/">Back to Sign In</Link>
        </div>
      </div>
    );
  }
  return (
    <div className="client-container">
      <AsideNav flag={flag} />

      <Switch>
        <Route path={`${url}/:type/:id/`} component={Chat} />
        <Route path={`${url}/new-channel`}>
          <Maker setFlag={setFlag} />
        </Route>
      </Switch>
    </div>
  );
}
