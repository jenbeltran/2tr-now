import { useState } from 'react';
import { Button } from 'reactstrap';
import Countries from '../Countries';
import Programs from '../Program';
import SpecialtyBusiness from '../specialty/SpecialtyBusiness';
import SpecialtyLanguage from '../specialty/SpecialtyLanguage';
import SpecialtyMath from '../specialty/SpecialtyMath';
import SpecialtyOther from '../specialty/SpecialtyOther';
import SpecialtyScience from '../specialty/SpecialtyScience';
import Modal from '../Modal';

const TutorRegister = (props) => {
	const [ program, setProgram ] = useState();
	const [ subject, setSubject ] = useState();

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

	return (
		<div className="Register-div">
			<table>
				<tr>
					<td>
						<p className="Register-p">First Name:</p>
						<input type="text" />
					</td>
					<td>
						<p className="Register-p">Last Name:</p>
						<input type="text" />
					</td>
				</tr>
			</table>

			<p className="Register-p">Email:</p>
			<input type="email" />
			<p className="Register-p">Password:</p>
			<input type="password" />
			<p className="Register-p">Re-enter Password:</p>
			<input type="password" />

			<table>
				<tr>
					<td>
						<p className="Register-p">Location:</p>
						<Countries />
					</td>
					<td className="Register-record">
						<p className="Register-p">Criminal Record:</p>
						<Modal
							modalButton={'Upload'}
							modalBody={'Please upload your criminal record'}
							modalHeader={'Criminal Record'}
						/>
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
			</table>
			<br />
			<Button outline href="tutor_dashboard">
				Register
			</Button>
		</div>
	);
};

export default TutorRegister;
