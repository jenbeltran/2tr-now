import axios from 'axios';
import { Container } from 'reactstrap';
import BlueEye from '../static/blueeye.png';
import TutorRateModal from '../components/TutorRateModal';

const TutorCompleted = ({ posts }) => {
	return (
		<div>
			<Container>
				<h1>Completed Tutor Sessions</h1>

				<div class="table-wrapper">
					<table class="table table-light table-hover">
						<thead class="thead-light">
							<tr>
								<th scope="col">Request ID</th>
								<th scope="col">Date</th>
								<th scope="col">Program</th>
								<th scope="col">Subject</th>
								<th scope="col">Topic</th>
								<th scope="col">Length</th>
								<th scope="col">Student Taught</th>
								<th scope="col">Action</th>
							</tr>
						</thead>

						<tbody>
							{posts.map((requests) => (
								<tr>
									<th scope="row">{requests.requestId}</th>
									<td>{requests.dateRequested}</td>
									<td>{requests.program}</td>
									<td>{requests.subject}</td>
									<td>{requests.topic}</td>
									<td>{requests.sessionLength}</td>
									<td>{requests.studentId}</td>
									<td>
										<a href="/request_details">
											<img src={BlueEye} alt="View Details" width="35px" />
										</a>
										<TutorRateModal />
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

TutorCompleted.getInitialProps = async ({ query }) => {
	const { data } = await axios.get(`http://localhost:3000/api/tutor_completed/${query.id}`);
	return { ...query, posts: data };
};
export default TutorCompleted;
