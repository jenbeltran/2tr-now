import { Button } from 'reactstrap';

const TutorLogin = () => (
	<div>
		<div className="Login-div">
			<form>
				<p className="Login-p">Tutor Email:</p>
				<input className="Login-input" type="email" />
				<p className="Login-p">Tutor Password:</p>
				<input className="Login-input" type="current-password" />
			</form>
		</div>
		<Button className="Login-button1" outline>
			Tutor Login
		</Button>
	</div>
);

export default TutorLogin;
