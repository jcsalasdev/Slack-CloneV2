import { useEffect, useState } from "react";
import { useGetUser } from "../../context/UserProvider";
import "./Messages.css";/* 
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

export default function Messages() {
	const user = useGetUser();

	//can be batched using useReducer hook
	const [isLoading, setLoading] = useState(true);
	const [messages, setMessages] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const endPoint = `http://206.189.91.54//api/v1/messages?receiver_class=User&receiver_id=${receiver.id}&sender_id=${user?.id}`;
		const options = {
			headers: user,
		};
	
		//Immediately invoked function expressions
		(async () => {
			try {
				const response = await fetch(endPoint, options);
				const jsonData = await response.json();

				if (response.status === 200) {
					// console.log(jsonData);
					setLoading(false);
					setMessages(jsonData.data);
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
	}, [messages]);

	return (
		<div className="messages">
			{(!isLoading && (
				<ul className="messages__list" style={{ height: "515px" }}>

					{messages.map((message) => {
						return (
							<div className="user_icon"><i className="fas fa-user icon"></i><li key={message.id} className="messages__message">
								<div className="msg_container"><p className="msg" style={{margin:"0"}}>{message.body}</p>
								{/* { new Date(<Moment  className="chat_time"  format="LT" />)} */}</div>
							</li></div>

						);
					})}
				</ul>
			)) ||
				"...loading"}
		</div>
	);
}
