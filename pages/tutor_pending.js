import axios from 'axios';
import { Container, Button } from 'reactstrap';
import BlueEye from '../static/blueeye.png';
import TutorNavbar from '../components/navbars/TutorNavbar';

const TutorPending = ({ posts }) => {
	return (
		<div>
			<TutorNavbar />
			<Container>
				<h1>View Pending Requests</h1>

				<div className="table-wrapper">
					<table className="table table-light table-hover">
						<thead className="thead-light">
							<tr>
								<th scope="col">Request ID</th>
								<th scope="col">Date</th>
								<th scope="col">Program</th>
								<th scope="col">Subject</th>
								<th scope="col">Topic</th>
								<th scope="col">Length</th>
								<th scope="col">Action</th>
							</tr>
						</thead>

						<tbody>
							{posts.map((requests) => (
								<tr key={requests.requestId}>
									<th scope="row">{requests.requestId}</th>
									<td>{requests.dateRequested}</td>
									<td>{requests.program}</td>
									<td>{requests.subject}</td>
									<td>{requests.topic}</td>
									<td>{requests.sessionLength}</td>
									<td>
										<a href={`/request_details_tutor/${requests.requestId}`}>
											<img src={BlueEye} alt="View Details" width="35px" />
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</Container>
		</div>
	);
};

TutorPending.getInitialProps = async ({ query }) => {
	const { data } = await axios.get(`http://localhost:8080/api/tutor_pending/${query.id}`);
	return { ...query, posts: data };
};

export default TutorPending;
