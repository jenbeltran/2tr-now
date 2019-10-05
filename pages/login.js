import { Button } from 'reactstrap';

const Login = () => (
	<div>
		<h1 className="Login-h1">Welcome Back!</h1>
		<div className="Login-div">
			<p className="Login-p">Email:</p>
			<input className="Login-input" type="email" />
			<p className="Login-p">Password:</p>
			<input className="Login-input" type="password" />
			<a className="Login-a" href="/">
				<p>Forgot password? Click here to reset it</p>
			</a>
		</div>
		<Button className="Login-button1" outline>
			Login
		</Button>
		<h4 className="Login-h4">Don't have an account yet?</h4>
		<Button className="Login-button2" outline href="register">
			Register
		</Button>
	</div>
);

export default Login;
