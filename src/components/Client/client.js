import ChatBar from "../ChatBar/ChatBar";
import Messages from "../Messages/Messages";
import "./client.css";
export default function Client() {
	return (
		<div className="chat-container">
			<Messages />
			<ChatBar />
		</div>
	);
}
