import { useState } from "react";
import { useGetUser } from "../../context/UserProvider";
import "./ChatBar.css";

//HARD CODED PARTIES
// const receiverDetails = {
// 	"access-token": "Ebezl71fGd1HMerZV2miHQ",
// 	client: "mXb8sNDW9cl_kIkkH_noiw",
// 	expiry: "1626966070",
// 	uid: "m2@m.com",
// 	id: 32, //only needed receiver data to send message
// };

// const senderDetails = {
// 	//current user logged in
// 	//get user detail after Login
// 	"access-token": "IKtlykDtWRNk2lgG_hsWNw",
// 	client: "XP6LS0giKvN1ezHm3eLlmg",
// 	expiry: "1631875160",
// 	id: 3,
// 	uid: "meline@hotmail.com",
// };

export default function ChatBar({ changeFlag, receiverId, type }) {
  const user = useGetUser();
  //state related to chatbar
  const [text, setText] = useState("");

  //states related to sending message - may be merge using useReducer hook
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const senderDetails = user;

  function handleTextChange(e) {
    setText(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!text) {
      //if text is blank
      return;
    }
    try {
      const endPoint = "http://206.189.91.54//api/v1/messages";
      const data = {
        receiver_id: receiverId,
        receiver_class: type, //"Channel" when sending to Channel??
        body: text,
      };

      const options = {
        method: "post",
        headers: {
          "content-type": "application/json",
          ...senderDetails,
        },
        body: JSON.stringify(data),
      };

      setLoading(true);
      const response = await fetch(endPoint, options);
      const jsonData = await response.json();
      console.log(response.status);
      if (response.status === 200) {
        console.log(jsonData);
        setLoading(false);
        changeFlag();
      } else {
        //will go to catch block
        setLoading(false);
        throw { custom: "failed to send message" };
      }
    } catch (err) {
      console.log(err);
      //if not custom error, may be something else
      setError(err?.custom || "something wen't wrong");
      setLoading(false);
    }
    setText("");
  }

  return (
    <form
      className="chatbar"
      onSubmit={handleSubmit}
      style={{ borderTop: "2px solid black" }}
    >
      <p>{error || ""}</p>
      <div>
        <input
          className="chatbar-container"
          type="text"
          className="chatbar__field"
          style={{ width: "90%", marginRight: "5px", height: "30px" }}
          value={text}
          onChange={handleTextChange}
        />
        <button
          className="chatbar__action"
          type="submit"
          style={{
            height: "2.4rem",
            width: "6rem",
            fontSize: "24px",
          }}
        >
          {isLoading ? "...sending" : "send"}
        </button>
      </div>
    </form>
  );
}
