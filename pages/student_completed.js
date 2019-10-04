import { Container } from 'reactstrap';
import BlueEye from '../static/blueeye.png';
import StudentRateModal from '../components/StudentRateModal';

const StudentCompleted = () => (
	<div>
		<Container>
			<h1>Completed Tutor Sessions</h1>

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
							<th scope="col">Tutor Assigned</th>
							<th scope="col">Action</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>29/Jan/2019</td>
							<td>Business</td>
							<td>Accounting</td>
							<td>Expense Reporting</td>
							<td>10 mins</td>
							<td>Mike Jones</td>
							<td>
								<a href="/request_details">
									<img src={BlueEye} alt="View Details" width="35px" />
								</a>
								<StudentRateModal />
							</td>
						</tr>
						<tr>
							<th scope="row">1</th>
							<td>29/Jan/2019</td>
							<td>Business</td>
							<td>Accounting</td>
							<td>Expense Reporting</td>
							<td>10 mins</td>
							<td>Mike Jones</td>
							<td>
								<a href="/request_details">
									<img src={BlueEye} alt="View Details" width="35px" />
								</a>
								<StudentRateModal />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</Container>
	</div>
);

export default StudentCompleted;
