import { Container } from 'reactstrap';
import Modal from '../components/Modal';
import Placeholder from '../static/placeholder.png';
import Countries from '../components/Countries';
import Programs from '../components/Program';

const StudentProfile = () => (
	<div>
		<table className="Dashboard-table">
			<tr>
				<td>
					<img src={Placeholder} alt="placeholder" width="125px;" />
				</td>
				<td>
					<h1>Sydney White</h1>
				</td>
			</tr>
		</table>
		<Container>
			<table>
				<tr>
					<td>
						<p className="Profile-p">First Name:</p>
						<input type="text" />
					</td>
					<td>
						<p className="Profile-p">Last Name:</p>
						<input type="text" />
					</td>
				</tr>
			</table>

			<p className="Profile-p">Date of Birth:</p>
			<input type="text" />
			<p className="Profile-p">Email:</p>
			<input type="email" />
			<p className="Profile-p">Location:</p>
			<Countries />
			<p className="Profile-p">Program:</p>
			<Programs />
			<br />
			<Modal
				modalButton={'Save'}
				modalHeader={'Confirm Details'}
				modalBody={'Please confirm your details below:'}
			/>
		</Container>
	</div>
);

export default StudentProfile;
