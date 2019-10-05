import React from 'react';
import { Container, Card, CardImg, CardTitle, CardDeck, CardBody } from 'reactstrap';
import Placeholder from '../static/Placeholder.png';
import Eye from '../static/eye.png';
import Checkmark from '../static/checkmark.png';

const TutorDashboard = () => (
	<div>
		<table className="Dashboard-table">
			<tr>
				<td>
					<img src={Placeholder} alt="placeholder" width="125px;" />
				</td>
				<td>
					<h1>Welcome, Mike!</h1>
				</td>
			</tr>
		</table>
		<Container>
			<CardDeck>
				<Card>
					<a href="tutor_pending">
						<CardBody>
							<CardTitle className="Dashboard-cardTitle">View Requests</CardTitle>
							<CardImg className="TutorDashboard-cardImg" src={Eye} alt="View/Accept Pending Requests" />
						</CardBody>
					</a>
				</Card>
				<Card>
					<a href="tutor_completed">
						<CardBody>
							<CardTitle className="Dashboard-cardTitle">Completed Sessions</CardTitle>
							<CardImg
								className="TutorDashboard-cardImg"
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

export default TutorDashboard;
