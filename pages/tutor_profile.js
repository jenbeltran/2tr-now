import axios from 'axios';
import { useState } from 'react';
import { Container } from 'reactstrap';
import Modal from '../components/Modal';
import Placeholder from '../static/placeholder.png';
import Countries from '../components/Countries';
import Programs from '../components/Program';
import SpecialtyBusiness from '../components/specialty/SpecialtyBusiness';
import SpecialtyMath from '../components/specialty/SpecialtyMath';
import SpecialtyLanguage from '../components/specialty/SpecialtyLanguage';
import SpecialtyOther from '../components/specialty/SpecialtyOther';
import SpecialtyScience from '../components/specialty/SpecialtyScience';

const TutorProfile = ({ posts }) => {
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
		<div>
			<table className="Dashboard-table">
				<tr>
					<td>
						<Modal
							modalButton={<img src={Placeholder} alt="placeholder" width="125px;" />}
							modalHeader={'Profile Photo Upload'}
							modalBody={'Please upload a profile photo'}
						/>
					</td>
					<td>
						<h1>Mike Jones</h1>
					</td>
				</tr>
			</table>
			<Container>
				<table>
					<tr>
						<td>
							<p className="Profile-p">First Name:</p>
							<input type="text" />
						</td>
						<td>
							<p className="Profile-p">Last Name:</p>
							<input type="text" />
						</td>
					</tr>
				</table>

				<p className="Profile-p">Date of Birth:</p>
				<input type="text" />
				<p className="Profile-p">Email:</p>
				<input type="email" />
				<p className="Profile-p">Location:</p>
				<Countries />

				<table>
					<tr>
						<td>
							<p className="Profile-p">Program:</p>
							<Programs name="program" value={program} onChange={handleChangeProgram} />
						</td>
						<td>
							<p className="Profile-p">Specialty:</p>
							{specialtySubject}
						</td>
					</tr>
				</table>
			</Container>
		</div>
	);
};

TutorProfile.getInitialProps = async ({ query }) => {
	const { data } = await axios.get(`http://localhost:3000/api/tutor/${query.id}`);
	return { ...query, posts: data };
};

export default TutorProfile;
