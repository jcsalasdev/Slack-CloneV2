import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Channels from "./ChannelList";
import "./Aside.css";
import { useSetUser } from "../../context/UserProvider";
import Users from "../Users/Users";

export default function AsideNav() {
  const { url } = useRouteMatch();
  const signOutUser = useSetUser();
  function handleSignOut() {
    signOutUser({ type: "log out" });
  }
  return (
    <div className="Aside-container">
      <Link to="/client">
        <h1 className="home-C">Avion School</h1>
      </Link>

      <div className="aside-btn-container">
        <div className="aside-btn">
          <h4>Channels</h4>
          <Link to={`${url}/new-channel`}>
            <button className="fas fa-plus action" />
          </Link>
        </div>
        <Channels />
      </div>
      <div>
        <div className="aside-btn">
          <h4>Direct Messages</h4>
          <button className="fas fa-plus action" />
        </div>
        <Users />
      </div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

{
  /* <ul className="hide">
{channels.map(({ name, id }) => {
  return (
    <Link to={`/client/chats/${id}/channel`} key={id}>
      {name}
    </Link>
  );
})}
</ul> */
}
