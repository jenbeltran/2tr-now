import axios from 'axios';
import ReplyModal from '../components/ReplyModal';

const RequestDetails = ({ posts }) => {
	return (
		<div>
			{posts.map((requests) => <h1 key={requests.requestId}>Request ID: {requests.requestId}</h1>)}
			{posts.map((requests) => (
				<div key={requests.requestId} className="RequestDetails-div1">
					<a href="/student_view/1001">
						<h6>{requests.studentId}</h6>
					</a>
					<h6>PROGRAM: {requests.program}</h6>
					<h6>SUBJECT: {requests.subject}</h6>
					<h6>TOPIC: {requests.topic}</h6>
					<h6>DESCRIPTION:</h6>
					<p>{requests.description}</p>
				</div>
			))}
			<div className="RequestDetails-div2">
				<a href="/tutor_view">
					<h6>MIKE JONES</h6>
				</a>
				<h6>REPLY:</h6>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum
				</p>
			</div>
			<ReplyModal />
		</div>
	);
};

RequestDetails.getInitialProps = async ({ query }) => {
	const { data } = await axios.get(`http://localhost:3000/api/request_details/${query.id}`);
	return { ...query, posts: data };
};

export default RequestDetails;
