import { Container } from 'reactstrap';
import Placeholder from '../static/placeholder.png';

const ViewStudentProfile = () => (
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
			<input type="text" />
			<p className="Profile-p">Program:</p>
			<input type="text" />
		</Container>
	</div>
);

export default ViewStudentProfile;
