import React from 'react';
import { Container, Card, CardImg, CardTitle, CardDeck, CardBody } from 'reactstrap';
import Placeholder from '../static/Placeholder.png';
import Add from '../static/add.png';
import Eye from '../static/eye.png';
import Checkmark from '../static/checkmark.png';

const StudentDashboard = () => (
	<div>
		<table className="Dashboard-table">
			<tr>
				<td>
					<img src={Placeholder} alt="placeholder" width="125px;" />
				</td>
				<td>
					<h1>Welcome, Sydney!</h1>
				</td>
			</tr>
		</table>
		<Container>
			<CardDeck>
				<Card>
					<a href="/student_request">
						<CardBody>
							<CardTitle className="Dashboard-cardTitle">Create a New Tutor Request</CardTitle>
							<CardImg className="StudentDashboard-cardImg" src={Add} alt="Create a New Tutor Request" />
						</CardBody>
					</a>
				</Card>
				<Card>
					<a href="/student_pending">
						<CardBody>
							<CardTitle className="Dashboard-cardTitle">View All Pending Requests</CardTitle>
							<CardImg className="StudentDashboard-cardImg" src={Eye} alt="View Pending Requests" />
						</CardBody>
					</a>
				</Card>
				<Card>
					<a href="/student_completed">
						<CardBody>
							<CardTitle className="Dashboard-cardTitle">View Completed Tutor Sessions</CardTitle>
							<CardImg
								className="StudentDashboard-cardImg"
								src={Checkmark}
								alt="View Completed Tutor Sessions"
							/>
						</CardBody>
					</a>
				</Card>
			</CardDeck>
		</Container>
	</div>
);

export default StudentDashboard;
