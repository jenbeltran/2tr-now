import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import { Button } from 'reactstrap';

const TutorLogin = ({ query }) => {
	const [ tutorEmail, setTutorEmail ] = useState();
	const [ password, setPassword ] = useState();
	const [ tutorId, setTutorId ] = useState();

	const handleChangeTutorEmail = (e) => {
		setTutorEmail(e.target.value);
		setTutorId(query);
	};

	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = () => {
		axios
			.post('http://localhost:3000/api/tutor_login', {
				tutorEmail : tutorEmail,
				password   : password
			})
			.then((res) => console.log(res))
			.then(Router.push(`/tutor_dashboard/${tutorId}`))
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<div className="Login-div">
				<form>
					<p className="Login-p">Tutor Email:</p>
					<input className="Login-input" type="email" value={tutorEmail} onChange={handleChangeTutorEmail} />
					<p className="Login-p">Tutor Password:</p>
					<input
						className="Login-input"
						type="password"
						name="password"
						value={password}
						onChange={handleChangePassword}
					/>
				</form>
			</div>
			<Button className="Login-button1" onClick={handleSubmit} outline>
				Tutor Login
			</Button>
		</div>
	);
};

export default TutorLogin;
