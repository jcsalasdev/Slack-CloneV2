import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetUser } from "../../context/UserProvider";
import "./Messages.css";

export default function Messages({ flag, receiverId, type }) {
  const user = useGetUser();

  //can be batched using useReducer hook
  const [isLoading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const endPoint = `http://206.189.91.54//api/v1/messages?receiver_class=${type}&receiver_id=${receiverId}&sender_id=${user?.id}`;
    const options = {
      headers: user,
    };

    //Immediately invoked function expressions
    (async () => {
      try {
        const response = await fetch(endPoint, options);
        const jsonData = await response.json();
        if (response.status === 200) {
          setLoading(false);
          setMessages(jsonData.data);
          console.log("hahhaha", jsonData.data);
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
  }, [flag]);

  return (
    <div className="messages">
      <Link to="/client">
        <h1
          className="close-chat"
          style={{
            textAlign: "right",
            paddingRight: ".7rem",
            margin: "0",
          }}
        >
          X
        </h1>
        {/* click return to client or rerender when selecting new convo */}
      </Link>
      {(!isLoading && (
        <ul className="messages__list" style={{ height: "85vh" }}>
          {messages?.map((message) => {
            console.log(message);
            return (
              <div className="user_icon" key={message.id}>
                <i
                  className="fas fa-user icon"
                  style={{
                    color:
                      message.sender.uid !== user.uid ? "green" : "darkcyan",
                  }}
                ></i>
                <li key={message.id} className="messages__message">
                  <div
                    className="msg_container"
                    style={{
                      backgroundColor:
                        message.sender.uid !== user.uid ? "green" : "darkcyan",
                    }}
                  >
                    <p className="msg-uid" style={{ fontSize: "10px" }}>
                      {message.sender.uid}
                    </p>
                    <p className="msg" style={{ margin: "0" }}>
                      {message.body}
                    </p>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      )) ||
        "...loading"}
    </div>
  );
}
