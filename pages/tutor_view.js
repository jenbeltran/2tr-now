import axios from 'axios';
import { Container } from 'reactstrap';
import Placeholder from '../static/placeholder.png';
import StudentNavbar from '../components/navbars/StudentNavbar';

const ViewTutorProfile = ({ posts }) => (
	<div>
		<StudentNavbar />
		{posts.map((requests) => (
			<table key={requests.tutorId} className="Dashboard-table">
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
				<table key={requests.tutorId}>
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
				<div key={requests.tutorId}>
					<p className="Profile-p">Email:</p>
					<input type="email" value={requests.tutorEmail} readOnly />
					<p className="Profile-p">Location:</p>
					<input type="text" value={requests.location} readOnly />
				</div>
			))}
			{posts.map((requests) => (
				<table key={requests.tutorId}>
					<tr>
						<td>
							<p className="Profile-p">Program:</p>
							<input type="text" value={requests.program} readOnly />
						</td>
						<td>
							<p className="Profile-p">Specialty:</p>
							<input type="text" value={requests.specialty} readOnly />
						</td>
					</tr>
				</table>
			))}
		</Container>
	</div>
);

ViewTutorProfile.getInitialProps = async ({ query }) => {
	const { data } = await axios.get(`http://localhost:3000/api/tutor/${query.id}`);
	return { ...query, posts: data };
};

export default ViewTutorProfile;
