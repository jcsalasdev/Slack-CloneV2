import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import "./Aside.css";

const channels = [
  { name: "channel 1", id: 1 },
  { name: "channel 2", id: 2 },
];

export default function AsideNav() {
  const { url } = useRouteMatch();

  return (
    <div className="Aside-container">
      <h1>Avion School</h1>
      <div className="aside-btn-container">
        <div className="aside-btn">
          <h5>Channels</h5>
          <Link to={`${url}/new-channel`}>
            <button className="fas fa-plus action" />
          </Link>
        </div>
        <ul className="hide">
          {channels.map(({ name, id }) => {
            return (
              <Link to={`/client/chats/${id}/channel`} key={id}>
                {name}
              </Link>
            );
          })}
        </ul>
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
