import axios from 'axios';
import { Container } from 'reactstrap';
import Placeholder from '../static/placeholder.png';
import TutorNavbar from '../components/navbars/TutorNavbar';

const ViewStudentProfile = ({ posts }) => (
	<div>
		<TutorNavbar />
		{posts.map((requests) => (
			<table key={requests.studentId} className="Dashboard-table">
				<tr>
					<td>
						<img src={Placeholder} alt="placeholder" width="125px;" />
					</td>
					<td>
						<h1>
							{requests.firstName} {requests.lastName}
						</h1>
					</td>
				</tr>
			</table>
		))}
		<Container>
			{posts.map((requests) => (
				<table key={requests.studentId}>
					<tr>
						<td>
							<p className="Profile-p">First Name:</p>
							<input type="text" value={requests.firstName} readOnly />
						</td>
						<td>
							<p className="Profile-p">Last Name:</p>
							<input type="text" value={requests.lastName} readOnly />
						</td>
					</tr>
				</table>
			))}
			{posts.map((requests) => (
				<div key={requests.studentId}>
					<p className="Profile-p">Date of Birth:</p>
					<input type="text" value={requests.dob} readOnly />
					<p className="Profile-p">Email:</p>
					<input type="email" value={requests.studentEmail} readOnly />
					<p className="Profile-p">Location:</p>
					<input type="text" value={requests.location} readOnly />
					<p className="Profile-p">Program:</p>
					<input type="text" value={requests.program} readOnly />
				</div>
			))}
		</Container>
	</div>
);

ViewStudentProfile.getInitialProps = async ({ query }) => {
	const { data } = await axios.get(`http://localhost:8080/api/student/${query.id}`);
	return { ...query, posts: data };
};

export default ViewStudentProfile;
