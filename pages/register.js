import { Button } from 'reactstrap';

const Register = () => (
	<div>
		<h1 className="Register-h1">Register a new account!</h1>
		<div className="Register-div">
			<p>First Name:</p>
			<input type="text" />
			<p>Last Name:</p>
			<input type="text" />
			<p>Date of Birth:</p>

			<p>Email:</p>
			<input type="email" />
			<p>Password:</p>
			<input type="password" />
			<p>Re-enter Password:</p>
			<input type="password" />
			<p>Location:</p>
			<p>Program:</p>
		</div>
		<Button outline>Register</Button>
	</div>
);

export default Register;
