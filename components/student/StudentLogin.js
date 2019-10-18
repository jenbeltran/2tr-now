import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import { Button } from 'reactstrap';

const StudentLogin = () => {
	const [ studentEmail, setStudentEmail ] = useState();
	const [ password, setPassword ] = useState();
	const [ id, setId ] = useState();

	const handleChangeStudentEmail = (e) => {
		setStudentEmail(e.target.value);
		setId(1001);
	};

	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = () => {
		axios
			.post('http://localhost:3000/api/student_login', {
				studentEmail : studentEmail,
				password     : password
			})
			.then((res) => console.log(res))
			.then(Router.push(`/student_dashboard/${id}`))
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<div className="Login-div">
				<form>
					<p className="Login-p">Student Email:</p>
					<input type="email" value={studentEmail} onChange={handleChangeStudentEmail} />
					<p className="Login-p">Student Password:</p>
					<input type="current-password" name="password" value={password} onChange={handleChangePassword} />
				</form>
			</div>
			<Button className="Login-button1" onClick={handleSubmit} outline>
				Student Login
			</Button>
		</div>
	);
};

export default StudentLogin;