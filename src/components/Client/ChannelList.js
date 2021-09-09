import { useEffect, useState } from "react";
import { useGetUser } from "../../context/UserProvider";
import { Link } from "react-router-dom";

export default function Channels() {
  const user = useGetUser();

  //can be batched using useReducer hook
  const [isLoading, setLoading] = useState(false);
  const [channels, setChannels] = useState([]);
  const [error, setError] = useState(null);
  console.log(channels);
  useEffect(() => {
    const endPoint = `http://206.189.91.54//api/v1/channels`;
    const options = {
      headers: user,
    };

    //Immediately invoked function expressions
    (async () => {
      try {
        setLoading(true);
        const response = await fetch(endPoint, options);
        const jsonData = await response.json();

        if (response.status === 200) {
          // console.log(jsonData);
          setChannels(jsonData.data);
          setLoading(false);
        } else {
          setLoading(false);
          //catch will get this error
          throw { custom: "failed to get channels" };
        }
      } catch (err) {
        console.log(err);
        //if other than custom error, must be something else
        setError(err?.custom || "something went wrong");
        setLoading(false);
      }
    })(); //invocation here
  }, []);

  return (
    <div className="channels">
      {(!isLoading && (
        <ul className="channels__list">
          {channels.map(({ name, id }) => (
            <Link to={`/client/Channel/${id}`} key={id}>
              {name}
            </Link>
          ))}
        </ul>
      )) ||
        "...loading"}
    </div>
  );
}

{
  /* <ul className="channels__list" style={{ height: "515px" }}>
  {channels.map((channel) => {
    return (
      <div className="user_icon">
        <li key={channel.user_ids} className="channels_channel">
          <p className="msg" style={{ margin: "0" }}>
            {channel.name}
          </p>
        </li>
      </div>
    );
  })}
</ul>;  */
}

/* <ul className="hide">
{channels.map(({ name, id }) => {
  return (
    <Link to={`/client/chats/${id}/channel`} key={id}>
      {name}
    </Link>
  );
})}
</ul> */
