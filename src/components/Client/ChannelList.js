import { useEffect, useState } from "react";
import { useGetUser } from "../../context/UserProvider";
/* 
import Moment from "react-moment"; */
const receiver = {
  id: 2,
};

// const loggedInUser = {
// 	"access-token": "Q7h2aN07TFCt1J5UJF3E8A",
// 	client: "IWStMJ7NjixPmLPQAiG6wQ",
// 	expiry: "1626967169",
// 	id: 31,
// 	uid: "m1@m.com",
// };

export default function Channels() {
  const user = useGetUser();

  //can be batched using useReducer hook
  const [isLoading, setLoading] = useState(true);
  const [channels, setChannels] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const endPoint = `http://206.189.91.54//api/v1/channels`;
    const options = {
      headers: user,
    };

    //Immediately invoked function expressions
    (async () => {
      try {
        const response = await fetch(endPoint, options);
        const jsonData = await response.json();

        if (response.status === 200) {
          console.log(jsonData);
          setLoading(false);
          setChannels(jsonData.data);
        } else {
          setLoading(false);
          //catch will get this error
          throw { custom: "failed to get messages" };
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
        <select className="select" style={{}}>
            <option></option>
          {channels.map((channel) => {
            return (
              <>
                
                <option className="option" >{channel.name}</option>
              </>
            );
          })}
        </select>
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
