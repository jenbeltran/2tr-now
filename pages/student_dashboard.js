import React from 'react';
import axios from 'axios';
import { Container, Card, CardImg, CardTitle, CardDeck, CardBody } from 'reactstrap';
import Placeholder from '../static/placeholder.png';
import Add from '../static/add.png';
import Eye from '../static/eye.png';
import Checkmark from '../static/checkmark.png';

const StudentDashboard = ({ posts }) => (
	<div>
		{posts.map((requests) => (
			<table key={requests.studentId} className="Dashboard-table">
				<tr>
					<td>
						<img src={Placeholder} alt="placeholder" width="125px;" />
					</td>
				</tr>
				<tr>
					<td>
						<h1>Welcome, {requests.firstName}!</h1>
					</td>
				</tr>
			</table>
		))}
		<Container>
			{posts.map((requests) => (
				<CardDeck key={requests.studentId}>
					<Card>
						<a href="/student_request">
							<CardBody>
								<CardTitle className="Dashboard-cardTitle">New Request</CardTitle>
								<CardImg
									className="StudentDashboard-cardImg"
									src={Add}
									alt="Create a New Tutor Request"
								/>
							</CardBody>
						</a>
					</Card>

					<Card>
						<a href={`/student_pending/${requests.studentId}`}>
							<CardBody>
								<CardTitle className="Dashboard-cardTitle">Pending Requests</CardTitle>
								<CardImg className="StudentDashboard-cardImg" src={Eye} alt="View Pending Requests" />
							</CardBody>
						</a>
					</Card>

					<Card>
						<a href={`/student_completed/${requests.studentId}`}>
							<CardBody>
								<CardTitle className="Dashboard-cardTitle">Completed Sessions</CardTitle>
								<CardImg
									className="StudentDashboard-cardImg"
									src={Checkmark}
									alt="View Completed Tutor Sessions"
								/>
							</CardBody>
						</a>
					</Card>
				</CardDeck>
			))}
		</Container>
	</div>
);

StudentDashboard.getInitialProps = async ({ query }) => {
	console.log('student dashboard front end');
	console.log(query);
	const { data } = await axios.get(`http://localhost:3000/api/student/${query.studentId}`);
	return { ...query, posts: data };
};

export default StudentDashboard;
