import { Container } from 'reactstrap';
import Modal from '../components/Modal';
import Placeholder from '../static/placeholder.png';
import Countries from '../components/Countries';
import Programs from '../components/Program';
import SpecialtyBusiness from '../components/specialty/SpecialtyBusiness';
import SpecialtyMath from '../components/specialty/SpecialtyMath';

const TutorProfile = () => (
	<div>
		<table className="Dashboard-table">
			<tr>
				<td>
					<Modal
						modalButton={<img src={Placeholder} alt="placeholder" width="125px;" />}
						modalHeader={'Profile Photo Upload'}
						modalBody={'Please upload a profile photo'}
					/>
				</td>
				<td>
					<h1>Mike Jones</h1>
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

			<table>
				<tr>
					<td>
						<p className="Profile-p">Program:</p>
						<Programs />
					</td>
					<td>
						<p className="Profile-p">Specialty:</p>
						<SpecialtyBusiness />
					</td>
				</tr>
			</table>
			<br />
			<Modal
				modalButton={'Save'}
				modalHeader={'Confirm Details'}
				modalBody={'Please confirm your details below:'}
			/>
		</Container>
	</div>
);

export default TutorProfile;
