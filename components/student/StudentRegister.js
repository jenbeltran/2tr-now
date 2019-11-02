import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import { Button } from 'reactstrap';
import Countries from '../Countries';
import Programs from '../Program';
import DayPickerInput from 'react-day-picker/DayPickerInput';

const StudentRegister = () => {
	const [ firstName, setFirstName ] = useState();
	const [ lastName, setLastName ] = useState();
	const [ dob, setDob ] = useState();
	const [ studentEmail, setStudentEmail ] = useState();
	const [ password, setPassword ] = useState();
	const [ location, setLocation ] = useState();
	const [ program, setProgram ] = useState();

	const handleChangeFirstName = (e) => {
		setFirstName(e.target.value);
	};

	const handleChangeLastName = (e) => {
		setLastName(e.target.value);
	};

	const handleChangeDob = (day) => {
		setDob(day);
	};

	const handleChangeStudentEmail = (e) => {
		setStudentEmail(e.target.value);
	};

	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleChangeLocation = (e) => {
		setLocation(e.target.value);
	};

	const handleChangeProgram = (e) => {
		setProgram(e.target.value);
	};

	const handleSubmit = () => {
		let stringDate = dob.toLocaleDateString();
		axios
			.post('http://localhost:8080/api/student', {
				studentEmail : studentEmail,
				firstName    : firstName,
				lastName     : lastName,
				password     : password,
				location     : location,
				dob          : stringDate,
				program      : program
			})
			.then(Router.push('/login'))
			.catch((err) => console.log(err));
	};

	return (
		<div className="Register-div">
			<form>
				<table>
					<tbody>
						<tr>
							<td>
								<p className="Register-p">First Name:</p>
								<input
									type="text"
									name="firstName"
									value={firstName}
									onChange={handleChangeFirstName}
								/>
							</td>
							<td>
								<p className="Register-p">Last Name:</p>
								<input type="text" name="lastName" value={lastName} onChange={handleChangeLastName} />
							</td>
						</tr>
					</tbody>
				</table>

				<p className="Register-p">Date of Birth:</p>
				<table>
					<tbody>
						<tr>
							<td>
								<DayPickerInput name="dob" onDayChange={handleChangeDob} value={dob} />
							</td>
						</tr>
					</tbody>
				</table>

				<p className="Register-p">Email:</p>
				<input type="email" name="studentEmail" value={studentEmail} onChange={handleChangeStudentEmail} />
				<p className="Register-p">Password:</p>
				<input type="password" name="password" value={password} onChange={handleChangePassword} />

				<table>
					<tbody>
						<tr>
							<td>
								<p className="Register-p">Location:</p>
								<Countries name="location" value={location} onChange={handleChangeLocation} />
							</td>
							</tr>
							<tr>
							<td>
								<p className="Register-p">Program:</p>
								<Programs name="program" value={program} onChange={handleChangeProgram} />
							</td>
						</tr>
					</tbody>
				</table>
				<br />
				<Button outline onClick={handleSubmit}>
					Register
				</Button>
			</form>
		</div>
	);
};

export default StudentRegister;
