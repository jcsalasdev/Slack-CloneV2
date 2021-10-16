import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Channels from "./ChannelList";
import "./Aside.css";
import { useSetUser } from "../../context/UserProvider";
import Users from "../Users/Users";

export default function AsideNav(flag) {
  const { url } = useRouteMatch();
  const signOutUser = useSetUser();

  function handleSignOut() {
    signOutUser({ type: "log out" });
  }

  return (
    <div className="Aside-container">
      <Link to="/client">
        <h1 className="home-C">
          <i className="fab fa-slack ico"></i>Avion School
        </h1>
        {/* click return to client or rerender when selecting new convo */}
      </Link>

      <div className="aside-btn-container">
        <div className="aside-btn">
          <h4>Channels</h4>
          <Link to={`${url}/new-channel`}>
            <button className="fas fa-plus action" />
          </Link>
        </div>
        <Channels flag={flag} />
      </div>
      <div>
        <div className="aside-btn">
          <h4>Direct Messages</h4>
        </div>
        <Users />
      </div>
      <button className="sub-button" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}
