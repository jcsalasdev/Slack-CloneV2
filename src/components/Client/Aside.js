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
      
        <h2 className="home-C"><i className="fab fa-slack ico"></i>Avion School</h2>
      </Link>

      <div className="aside-btn-container" >
        <div className="aside-btn" style={{borderBottom:"1px solid white", borderTop:"1px solid white", width:"100%", padding:"5px"}}>
          <h4 >Channels</h4>
          <Link to={`${url}/new-channel`}>
            <button className="fas fa-plus action" />
          </Link>
        </div>
        <Channels />
      </div>
      <div>
        <div className="aside-btn" style={{borderBottom:"1px solid white", borderTop:"1px solid white", width:"100%", padding:"5px"}}>
          <h4 >Direct Messages</h4>
        </div>
        <Users />
      </div>
      <button className="sub-button" onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
