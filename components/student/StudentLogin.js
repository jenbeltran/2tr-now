import { Button } from 'reactstrap';

const StudentLogin = () => (
	<div>
		<div className="Login-div">
			<form>
				<p className="Login-p">Student Email:</p>
				<input className="Login-input" type="email" />
				<p className="Login-p">Student Password:</p>
				<input className="Login-input" type="password" />
			</form>
		</div>
		<Button className="Login-button1" outline>
			Student Login
		</Button>
	</div>
);

export default StudentLogin;
