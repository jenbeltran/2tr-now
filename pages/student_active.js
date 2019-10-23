import axios from 'axios';
import { Container } from 'reactstrap';
import BlueEye from '../static/blueeye.png';

const StudentActive = ({ posts }) => {
	return (
		<div>
			<Container>
				<h1>Active Student Sessions</h1>

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
								<th scope="col">Tutor Helping</th>
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
									<td>{requests.tutorId}</td>
									<td>
										<a href={`/request_details/${requests.requestId}`}>
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

StudentActive.getInitialProps = async ({ query }) => {
	const { data } = await axios.get(`http://localhost:3000/api/student_active/${query.studentId}`);
	return { ...query, posts: data };
};
export default StudentActive;
