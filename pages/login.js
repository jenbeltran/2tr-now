import { useState } from 'react';
import { Button } from 'reactstrap';
import StudentLogin from '../components/student/StudentLogin';
import TutorLogin from '../components/tutor/TutorLogin';

const Login = () => {
	const [ radio, setRadio ] = useState('student');

	const radioStudent = () => {
		setRadio('student');
	};

	const radioTutor = () => {
		setRadio('tutor');
	};

	return (
		<div>
			<h1 className="Login-h1">Welcome Back!</h1>
			<div>
				<input type="radio" name="radio-group" value="student" onClick={radioStudent} />
				<label htmlFor="student">Student?</label>
			</div>
			<div>
				<input type="radio" name="radio-group" value="tutor" onClick={radioTutor} />
				<label htmlFor="tutor">Tutor?</label>
			</div>
			{radio === 'student' ? <StudentLogin /> : <TutorLogin />}
			<h4 className="Login-h4">Don't have an account yet?</h4>
			<Button className="Login-button2" outline href="register">
				Register
			</Button>
		</div>
	);
};

export default Login;
