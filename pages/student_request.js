import { useState } from 'react';
import { Container, Button } from 'reactstrap';
import axios from 'axios';
import Router from 'next/router';
import Programs from '../components/Program';
import SpecialtyBusiness from '../components/specialty/SpecialtyBusiness';
import SpecialtyLanguage from '../components/specialty/SpecialtyLanguage';
import SpecialtyMath from '../components/specialty/SpecialtyMath';
import SpecialtyOther from '../components/specialty/SpecialtyOther';
import SpecialtyScience from '../components/specialty/SpecialtyScience';
import Language from '../components/Language';
import Time from '../components/Time';

const StudentRequest = (event) => {
	const [ studentId, setStudentId ] = useState();
	const [ program, setProgram ] = useState();
	const [ subject, setSubject ] = useState();
	const [ language, setLanguage ] = useState();
	const [ sessionLength, setSessionLength ] = useState();
	const [ topic, setTopic ] = useState();
	const [ description, setDescription ] = useState();

	const handleChangeStudentId = (e) => {
		setStudentId(e.target.value);
	};

	const handleChangeProgram = (e) => {
		setProgram(e.target.value);
	};

	const handleChangeSubject = (e) => {
		setSubject(e.target.value);
	};

	const handleChangeLanguage = (e) => {
		setLanguage(e.target.value);
	};

	const handleChangeSessionLength = (e) => {
		setSessionLength(e.target.value);
	};

	const handleChangeTopic = (e) => {
		setTopic(e.target.value);
	};

	const handleChangeDescription = (e) => {
		setDescription(e.target.value);
	};

	const handleSubmit = (event) => {
		axios
			.post('http://localhost:3000/api/student_requests', {
				studentId     : studentId,
				program       : program,
				subject       : subject,
				language      : language,
				sessionLength : sessionLength,
				topic         : topic,
				description   : description
			})
			.then(Router.push(`/student_pending/${studentId}`))
			.catch((err) => console.log(err));
		console.log(studentId, program, subject, language, sessionLength, topic, description);
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
			<h1>Create a New Tutor Request</h1>
			<Container>
				<table>
					<tr>
						<td>
							<p className="Profile-p">Program:</p>
							<Programs name="program" value={program} onChange={handleChangeProgram} />
						</td>
						<td>
							<p className="Profile-p">Subject:</p>
							{specialtySubject}
						</td>
					</tr>
					<tr>
						<td>
							<p className="Profile-p">Language:</p>
							<Language name="language" value={language} onChange={handleChangeLanguage} />
						</td>
						<td>
							<p className="Profile-p">Session Length:</p>
							<Time name="sessionLength" value={sessionLength} onChange={handleChangeSessionLength} />
						</td>
					</tr>
				</table>
				<p className="Profile-p">Topic:</p>
				<textarea rows="1" cols="50" name="topic" value={topic} onChange={handleChangeTopic} />
				<p className="Profile-p">Description:</p>
				<textarea
					rows="5"
					cols="50"
					placeholder="Context with tasks/question(s) to be answered"
					name="description"
					value={description}
					onChange={handleChangeDescription}
				/>
				<br />
				<br />
				<Button onClick={handleSubmit} outline>
					Submit Request
				</Button>
			</Container>
		</div>
	);
};

export default StudentRequest;
