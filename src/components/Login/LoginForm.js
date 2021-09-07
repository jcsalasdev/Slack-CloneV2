import { useState } from "react";
import logo from "./Slogo.png";
import "./LogInForm.css";
import { useHistory, Link } from "react-router-dom";
import { useSetUser } from "../../context/UserProvider";

export default function LogInForm() {
	const history = useHistory();
	const setUser = useSetUser();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [error, setError] = useState(null);
	const [isLoading, setLoading] = useState(false);

	function handleEmailChange(e) {
		setEmail(e.target.value);
	}

	function handlePwChange(e) {
		setPassword(e.target.value);
	}

	async function handleSubmit(e) {
		e.preventDefault();
		if (!email && !password) {
			return;
		}
		try {
			const data = {
				email,
				password,
			};

			const endPoint = "http://206.189.91.54//api/v1/auth/sign_in";
			const options = {
				method: "post",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(data),
			};

			setError(null);
			setLoading(true);
			const response = await fetch(endPoint, options);
			const jsonData = await response.json();

			if (response.status === 200) {
				history.push("/client/chats");
				//save needed access data
				const userData = {
					"access-token": response.headers.get("access-token"),
					expiry: response.headers.get("expiry"),
					uid: response.headers.get("uid"),
					id: jsonData.data.id,
					client: response.headers.get("client"),
				};
				setUser({ type: "save", payload: userData });
				console.log(userData); //may save userData to context to access globally
				setLoading(false);
			} else {
				//throw custom error that will go to catch block
				throw { custom: jsonData?.errors?.[0] || "failed to login" };
			}
		} catch (err) {
			//if error is not custom, then it must be something else
			setError(err?.custom || "something wen't wrong");
			setLoading(false);
		}
	}
	return (
		<form className="login-form" onSubmit={handleSubmit}>
			<img className="login__slack-logo" src={logo} alt="logo" />
			<p className="login__status">
				{isLoading ? "..loading" : ""}
				{error || ""}
			</p>
			<div className="login-container">
				<label className="login__label">Email</label>
				<input
					onChange={handleEmailChange}
					className="login__input"
					type="email"
					placeholder="type your email here"
				/>
				<label className="login__label">Password</label>
				<input
					onChange={handlePwChange}
					className="login__input"
					type="password"
					placeholder="type your password here"
					title="Must contain at least 8 or more characters"
					required
				/>
			</div>

			<div className="login__btns">
				<button type="submit" className="login__action btn">
					Sign In <i className="fas fa-sign-in-alt"></i>
				</button>
				<Link to="/signup">
					<button type="button" className="signup btn">
						Sign Up <i className="fab fa-slack"></i>
					</button>
				</Link>
			</div>
		</form>
	);
}
