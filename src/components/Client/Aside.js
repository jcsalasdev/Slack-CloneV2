import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Channels from "./ChannelList";

import "./Aside.css";

export default function AsideNav() {
  const {url} = useRouteMatch()
  
  return (
    <div className="Aside-container" >
      <h1>Avion School</h1>
      <div className="aside-btn-container" >
        <div className="aside-btn">
        <Channels/>
          <h5>Channels</h5>
          <Link to={`${url}/new-channel`}><button className="fas fa-plus action" /></Link>
         

          
       
        </div>
      </div>
      <div>
      <div className="aside-btn">
            <h5>Direct Messages</h5>
            <button className="fas fa-plus action" />
        </div>
      </div>
    </div>
  );
}
