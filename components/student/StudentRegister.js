import { Button } from 'reactstrap';
import Countries from '../Countries';
import Programs from '../Program';
import Date from '../date_dropdowns/Date';
import Month from '../date_dropdowns/Month';
import Year from '../date_dropdowns/Year';

const StudentRegister = () => (
	<div className="Register-div">
		<table>
			<tr>
				<td>
					<p className="Register-p">First Name:</p>
					<input type="text" />
				</td>
				<td>
					<p className="Register-p">Last Name:</p>
					<input type="text" />
				</td>
			</tr>
		</table>

		<p className="Register-p">Date of Birth:</p>
		<table>
			<tr>
				<td>
					<Date />
				</td>
				<td>
					<Month />
				</td>
				<td>
					<Year />
				</td>
			</tr>
		</table>

		<p className="Register-p">Email:</p>
		<input type="email" />
		<p className="Register-p">Password:</p>
		<input type="password" />
		<p className="Register-p">Re-enter Password:</p>
		<input type="password" />

		<table>
			<tr>
				<td>
					<p className="Register-p">Location:</p>
					<Countries />
				</td>
				<td>
					<p className="Register-p">Program:</p>
					<Programs />
				</td>
			</tr>
		</table>
		<br />
		<Button outline href="student_dashboard">
			Register
		</Button>
	</div>
);

export default StudentRegister;