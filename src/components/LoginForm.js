import React, { useState } from "react";

export default function LoginForm({ Login, error }) {
	const [details, setDetails] = useState({name: "", email: "", password: ""});
	function submitHandler(event) {
		event.preventDefault();

		Login(details)
	};

	function handleChange(event) {
		const {name, value} = event.target
		setDetails(prevDetails => {
			return {...prevDetails,
			[name]: value
			}
		});
	};

	return (
	<form onSubmit={submitHandler}> 
		<div className="form-inner">
			<h2>Login</h2>
			{(error !== "") ? ( <div className="error">{error}</div> ) : "" }
			<div className="form-group">
				<label htmlFor="name">Name:</label>
				<input type="text" name="name" id="name" onChange={handleChange} value={details.name}/>
			</div>
			<div className="form-group">
				<label htmlFor="email">Email:</label>
				<input type="email" name="email" id="email" onChange={handleChange} value={details.email} />
			</div>
			<div className="form-group">
				<label htmlFor="password">Password:</label>
				<input type="password" name="password" id="password" onChange={handleChange} value={details.password} />
			</div>
			<input type="submit" value="LOGIN" />
		</div>
	</form>	
	);
};