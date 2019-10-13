import axios from 'axios';
import Router from 'next/router';
import { useState } from 'react';
import { Button } from 'reactstrap';
import Countries from '../Countries';
import Programs from '../Program';
import SpecialtyBusiness from '../specialty/SpecialtyBusiness';
import SpecialtyLanguage from '../specialty/SpecialtyLanguage';
import SpecialtyMath from '../specialty/SpecialtyMath';
import SpecialtyOther from '../specialty/SpecialtyOther';
import SpecialtyScience from '../specialty/SpecialtyScience';

const TutorRegister = (props) => {
	const [ firstName, setFirstName ] = useState();
	const [ lastName, setLastName ] = useState();
	const [ tutorEmail, setTutorEmail ] = useState();
	const [ password, setPassword ] = useState();
	const [ location, setLocation ] = useState();
	const [ criminalRecord, setCriminalRecord ] = useState();
	const [ program, setProgram ] = useState();
	const [ subject, setSubject ] = useState();

	const handleChangeFirstName = (e) => {
		setFirstName(e.target.value);
	};

	const handleChangeLastName = (e) => {
		setLastName(e.target.value);
	};

	const handleChangeTutorEmail = (e) => {
		setTutorEmail(e.target.value);
	};

	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleChangeLocation = (e) => {
		setLocation(e.target.value);
	};

	const handleChangeCriminalRecord = (e) => {
		setCriminalRecord(event.target.files[0].name);
		console.log(event.target.files[0].name);
	};

	const handleChangeProgram = (e) => {
		setProgram(e.target.value);
	};

	const handleChangeSubject = (e) => {
		setSubject(e.target.value);
	};

	let specialtySubject;
	if (program === 'Business') {
		specialtySubject = <SpecialtyBusiness name="subject" value={subject} onChange={handleChangeSubject} />;
	} else if (program === 'ForeignLanguage') {
		specialtySubject = <SpecialtyLanguage name="subject" value={subject} onChange={handleChangeSubject} />;
	} else if (program === 'Math') {
		specialtySubject = <SpecialtyMath name="subject" value={subject} onChange={handleChangeSubject} />;
	} else if (program === 'Science') {
		specialtySubject = <SpecialtyScience name="subject" value={subject} onChange={handleChangeSubject} />;
	} else {
		specialtySubject = <SpecialtyOther name="subject" value={subject} onChange={handleChangeSubject} />;
	}

	const handleSubmit = () => {
		axios
			.post('http://localhost:3000/api/tutor', {
				tutorEmail     : tutorEmail,
				firstName      : firstName,
				lastName       : lastName,
				password       : password,
				location       : location,
				program        : program,
				specialty      : subject,
				criminalRecord : criminalRecord
			})
			.then((res) => {
				// then print response status
				console.log(criminalRecord);
				console.log(typeof criminalRecord);
			})
			.then(Router.push('/login'))
			.catch((err) => console.log(err));
	};
	return (
		<div className="Register-div">
			<form action="/api/tutor" encType="multipart/form-data">
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

				<p className="Register-p">Email:</p>
				<input type="email" name="tutorEmail" value={tutorEmail} onChange={handleChangeTutorEmail} />
				<p className="Register-p">Password:</p>
				<input type="current-password" name="password" value={password} onChange={handleChangePassword} />

				<table>
					<tbody>
						<tr>
							<td>
								<p className="Register-p">Location:</p>
								<Countries name="location" value={location} onChange={handleChangeLocation} />
							</td>
							<td className="Register-record">
								<p className="Register-p">Criminal Record:</p>
								<input type="file" name="file" onChange={handleChangeCriminalRecord} />
							</td>
						</tr>
						<tr>
							<td>
								<p className="Register-p">Program:</p>
								<Programs name="program" value={program} onChange={handleChangeProgram} />
							</td>
							<td>
								<p className="Register-p">Specialty:</p>
								{specialtySubject}
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

export default TutorRegister;
