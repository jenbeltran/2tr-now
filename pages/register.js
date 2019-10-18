import { useState } from 'react';
import StudentRegister from '../components/student/StudentRegister';
import TutorRegister from '../components/tutor/TutorRegister';

const Register = () => {
	const [ radio, setRadio ] = useState('student');

	const radioStudent = () => {
		setRadio('student');
	};

	const radioTutor = () => {
		setRadio('tutor');
	};

	return (
		<div>
			<h1 className="registerh1">Register a new account!</h1>
			<div className="Register-student">
				<input type="radio"  name="radio-group" value="student" onClick={radioStudent} />
				<label className="radio-option3" htmlFor="student">Student?</label>
			</div>
			<div className="Register-tutor">
				<input type="radio" name="radio-group" value="tutor" onClick={radioTutor} />
				<label className="radio-option3" htmlFor="tutor">Tutor?</label>
			</div>
			{radio === 'student' ? <StudentRegister /> : <TutorRegister />}
		</div>
	);
};

export default Register;
