import axios from 'axios';
import { Container } from 'reactstrap';
import BlueEye from '../static/blueeye.png';
import Trash from '../static/trash.png';

const StudentPending = ({ posts }) => {
	return (
		<div>
			<Container>
				<h1>View Pending Requests</h1>

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
								<th scope="col">Action</th>
							</tr>
						</thead>

						<tbody>
							{posts.map((requests) => (
								<tr key={requests.requestId}>
									<th scope="row">{requests.requestId}</th>
									<td>Date</td>
									<td>{requests.program}</td>
									<td>{requests.subject}</td>
									<td>{requests.topic}</td>
									<td>{requests.sessionLength}</td>
									<td>
										<a href={`/request_details/${requests.requestId}`}>
											<img src={BlueEye} alt="View Details" width="35px" />
										</a>
										<a rel="noopener">
											<img src={Trash} alt="Delete" width="25px" />
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

StudentPending.getInitialProps = async () => {
	const { data } = await axios.get('http://localhost:3000/api/requests');
	return { posts: data };
};

export default StudentPending;
