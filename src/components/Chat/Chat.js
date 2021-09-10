import ChatBar from "../ChatBar/ChatBar";
import Messages from "../Messages/Messages";
import { useParams } from "react-router";
import { useState } from "react";

export default function Chat() {
  const params = useParams();
  console.log(params);
  const [flag, setFlag] = useState("initial");
  function generateString() {
    return (Math.random() + 1).toString(36).substring(7);
  }

  function changeFlag() {
    setFlag(generateString());
  }

  return (
    <div className="chat-container">
      <Messages receiverId={params.id} type={params.type} flag={flag} />
      <ChatBar
        receiverId={params.id}
        changeFlag={changeFlag}
        type={params.type}
      />
    </div>
  );
}
