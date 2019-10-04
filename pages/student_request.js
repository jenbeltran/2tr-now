import { Container, Button } from 'reactstrap';
import Programs from '../components/Program';
import SpecialtyBusiness from '../components/specialty/SpecialtyBusiness';
import Language from '../components/Language';
import Time from '../components/Time';

const StudentRequest = () => (
	<div>
		<h1>Create a New Tutor Request</h1>
		<Container>
			<table>
				<tr>
					<td>
						<p className="Profile-p">Program:</p>
						<Programs />
					</td>
					<td>
						<p className="Profile-p">Subject:</p>
						<SpecialtyBusiness />
					</td>
				</tr>
				<tr>
					<td>
						<p className="Profile-p">Language:</p>
						<Language />
					</td>
					<td>
						<p className="Profile-p">Length:</p>
						<Time />
					</td>
				</tr>
			</table>

			<p className="Profile-p">Topic:</p>
			<textarea rows="1" cols="50" />
			<p className="Profile-p">Description:</p>
			<textarea rows="5" cols="50" placeholder="Context with tasks/question(s) to be answered)" />
			<br />
			<br />
			<Button outline href="/request_details">
				Submit Request
			</Button>
		</Container>
	</div>
);

export default StudentRequest;
