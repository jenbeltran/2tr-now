const SpecialtyScience = (props) => (
	<div>
		<select name={props.name} value={props.value} onChange={props.onChange}>
			<option value="selecting">Select a Specialty</option>
			<option value="Biology">Biology</option>
			<option value="Chemistry">Chemistry</option>
			<option value="Physics">Physics</option>
			<option value="ComputerScience">Computer Science</option>
			<option value="Other">Other</option>
		</select>
	</div>
);
export default SpecialtyScience;
