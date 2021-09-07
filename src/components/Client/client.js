import { Link } from "react-router-dom";
import { useGetUser } from "../../context/UserProvider";
import ChatBar from "../ChatBar/ChatBar";
import Messages from "../Messages/Messages";
import AsideNav from "./Aside";
import "./client.css";

export default function Client() {
	const user = useGetUser()
	if (!user) {
		return (
			<div className="no-user_container">
				<div className="no-user">
					<h1 className="no-user_title">Account has Sign Out</h1>
					<Link to="/">Back to Sign In</Link>
				</div>
			</div>)
	}
	return (
		<div className="client-container">
			<AsideNav />
			<div className="chat-container">

				<Messages />
				<ChatBar />

			</div>
		</div>

	);
}
