import { useGetUser } from "../../context/UserProvider";
import ChatBar from "../ChatBar/ChatBar";
import Messages from "../Messages/Messages";
import "./client.css";
export default function Client() {
	const user = useGetUser();
	if (!user) {
		return <div>no user detected</div>;
	}

	return (
		<div className="chat-container">
			<Messages />
			<ChatBar />
		</div>
	);
}
