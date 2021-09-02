<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UsersProvider from "./context/UseUser";

ReactDOM.render(
	<React.StrictMode>
		<UsersProvider>
			<App />
		</UsersProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
=======
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
>>>>>>> oliver-task
