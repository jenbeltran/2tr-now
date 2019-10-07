import ReplyModal from '../components/ReplyModal';

const RequestDetails = () => (
	<div>
		<h1>Request ID: 12345</h1>
		<div className="RequestDetails-div1">
			<a href="/student_view">
				<h6>SYDNEY WHITE</h6>
			</a>
			<h6>PROGRAM: Computer Science</h6>
			<h6>SUBJECT: Javascript</h6>
			<h6>TOPIC: For Loops</h6>
			<h6>DESCRIPTION:</h6>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
				ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
				fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
				deserunt mollit anim id est laborum
			</p>
		</div>
		<div className="RequestDetails-div2">
			<a href="/tutor_view">
				<h6>MIKE JONES</h6>
			</a>
			<h6>REPLY:</h6>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
				ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
				fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
				deserunt mollit anim id est laborum
			</p>
		</div>
		<ReplyModal />
	</div>
);

export default RequestDetails;
