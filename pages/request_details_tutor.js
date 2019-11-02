import axios from 'axios';
import Router from 'next/router';
import { Button } from 'reactstrap';
import ReplyModal from '../components/ReplyModal';
import TutorNavbar from '../components/navbars/TutorNavbar';

const RequestDetailsTutor = ({ posts }) => {
	const completeSession = () => {
		let id = posts[0].requestId;
		console.log('Complete Session');
		axios
			.put(`http://localhost:3000/api/request_details2/${id}`)
			.then(Router.push(`/request_details_tutor/${id}`))
			.catch((err) => console.log(err));
	};

	const acceptSession = () => {
		let id = posts[0].requestId;
		console.log('Accept Session');
		axios
			.put(`http://localhost:3000/api/request_details/${id}`)
			.then(Router.push(`/request_details_tutor/${id}`))
			.catch((err) => console.log(err));
	};

	let sessionTag;
	if (posts[0].completed === 2) {
		console.log(posts[0].completed);
		sessionTag = <h2>Completed</h2>;
	} else if (posts[0].completed === 1) {
		console.log(posts[0].completed);
		sessionTag = <Button onClick={completeSession}>Complete Session</Button>;
	} else {
		console.log(posts[0].completed);
		sessionTag = <Button onClick={acceptSession}>Accept Session</Button>;
	}

	return (
		<div>
			<TutorNavbar />
			{posts.map((requests) => (
				<div key={requests.requestId}>
					<h1>Request ID: {requests.requestId}</h1>
					{sessionTag}
				</div>
			))}
			{posts.map((requests) => (
				<div key={requests.requestId} className="RequestDetails-div1">
					<a href={`/student_profile/${requests.studentId}`}>
						<h6>{requests.studentId}</h6>
					</a>
					<h6>PROGRAM: {requests.program}</h6>
					<h6>SUBJECT: {requests.subject}</h6>
					<h6>TOPIC: {requests.topic}</h6>
					<h6>DESCRIPTION:</h6>
					<p>{requests.description}</p>
				</div>
			))}
			{posts.map((requests) => (
				<div key={requests.requestId} className="RequestDetails-div2">
					<p>Tutor ID Assigned to Request:</p>
					<a href={`/tutor_profile/${requests.tutorId}`}>
						<h6>{requests.tutorId}</h6>
					</a>
				</div>
			))}

			<ReplyModal />
		</div>
	);
};

RequestDetailsTutor.getInitialProps = async ({ query }) => {
	const { data } = await axios.get(`http://localhost:3000/api/request_details/${query.id}`);
	return { ...query, posts: data };
};

export default RequestDetailsTutor;
