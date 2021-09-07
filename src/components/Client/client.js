import { Link, useRouteMatch, Route, Switch } from "react-router-dom";
import { useGetUser } from "../../context/UserProvider";
import ChatBar from "../ChatBar/ChatBar";
import Messages from "../Messages/Messages";
import AsideNav from "./Aside";
import Maker from "../Maker/Maker";
import "./client.css";
/* import Users from "../Users/Users"; */

export default function Client() {
  const user = useGetUser();
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
      <AsideNav />

      <Switch >
        <Route exact path={`${url}/chats`}>
          <div className="chat-container">
            <Messages />
            <ChatBar />
          </div>
        </Route>
        <Route path={`${url}/new-channel`} component={Maker} />
      </Switch>
    </div>
  );
}
