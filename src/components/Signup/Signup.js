import { useState } from "react";
import { Link, useHistory} from "react-router-dom";
import logo from "../Login/Slogo.png";
import "./Signup.css";

export default function Signup() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmpass, setConfirmPass] = useState("");

	const [error, setError] = useState(null);
	const [isLoading, setLoading] = useState(false);

	function handleEmailChange(e) {
		setEmail(e.target.value);
	}

	function handlePwChange(e) {
		setPassword(e.target.value);
	}

	function handleConfirm(e) {
		setConfirmPass(e.target.value);
	}

	async function handleSubmit(e) {
		e.preventDefault();
		if (!email && !password && !confirmpass) {
			return;
		}

		try {
			const data = {
				email,
				password,
				password_confirmation: confirmpass,
			};

			const endPoint = "http://206.189.91.54//api/v1/auth/";
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

				alert("sign up success!");
				history.push("/");
				setLoading(false);
			} else {
				throw {
					custom: jsonData?.errors?.full_messages[0] || "failed to signup",
				};
			}
		} catch (err) {
			console.log(err);
			setError(err?.custom || "something went wrong");
			setLoading(false);
		}
	}

	return (
		<div className="signup-container">
			<form
				class="ui form purple"
				onSubmit={handleSubmit}
				style={{ marginTop: "75px" }}
			>
				{/* <h1 className="ui center aligned header white" style={{ color:"whitesmoke" }}>SIGNUP</h1> */}
				<i class="chevron circle left"></i><img src={logo}   class="image" alt="logo" /><br />
				<p className="signup__status" >{isLoading ? "..loading" : ""}</p>
				<p className="signup__error">{error || ""}</p>
				 <br />
				<div className="">
					<label  style={{ color:"whitesmoke",fontWeight:"bolder",fontSize:"22px" }}>Email</label>
					<br />

					<input
						className="input"		
						type="email"
						onChange={handleEmailChange}
						value={email}
						placeholder="Email"
						style={{ width: "370px" }}
						required
					/>
						
				</div>
				<br />
				<label  style={{ color:"whitesmoke",fontWeight:"bolder",fontSize:"22px"}}>Password</label> <br />
				<input
					className="input"
					type="password"
					onChange={handlePwChange}
					value={password}
					placeholder="Password"
					style={{ width: "370px" }}
					required
				/>
				<br /> <br />
				<label style={{ color:"whitesmoke", fontWeight:"bolder",fontSize:"22px"}}> Confirm Password</label> <br />
				<input
					className="input"
					type="password"
					onChange={handleConfirm}
					value={confirmpass}
					placeholder="Confirm password"
					style={{ width: "370px" }}
					required
				/>
					
				<br /> <br />
			
				
				<button className="signup-btn" type="submit">
					SUBMIT
				</button>	
				<br /> <br />
				<Link to="/">back to Sign In</Link>
			
			</form>
		</div>
	);
}
