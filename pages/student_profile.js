import { Container } from 'reactstrap';
import axios from 'axios';
import Modal from '../components/Modal';
import Placeholder from '../static/placeholder.png';
import Countries from '../components/Countries';
import Programs from '../components/Program';
import StudentNavbar from '../components/navbars/StudentNavbar';

const StudentProfile = ({ posts }) => (
	<div>
		<StudentNavbar />
		{posts.map((requests) => (
			<table key={requests.studentId} className="profile-table">
				<tr>
					<td>
						<Modal
							modalButton={<img src={Placeholder} alt="placeholder" className="modal-img" />}
							modalHeader={'Profile Photo Upload'}
							modalBody={'Please upload a profile photo'}
						/>
					</td>
				</tr>
				<tr>
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
					<Countries value={requests.location} />
					<p className="Profile-p">Program:</p>
					<Programs value={requests.program} />
					<br />
					<Modal
						modalButton={'Save'}
						modalHeader={'Confirm Details'}
						modalBody={'Please confirm your details below:'}
					/>
				</div>
			))}
		</Container>
	</div>
);

StudentProfile.getInitialProps = async ({ query }) => {
	const { data } = await axios.get(`http://localhost:8080/api/student/${query.id}`);
	return { ...query, posts: data };
};

export default StudentProfile;
