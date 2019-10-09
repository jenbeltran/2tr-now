const SpecialtyLanguage = (props) => (
	<div>
		<select name={props.name} value={props.value} onChange={props.onChange}>
			<option value="selecting">Select a Specialty</option>
			<option value="French">French</option>
			<option value="Spanish">Spanish</option>
			<option value="Italian">Italian</option>
			<option value="Chinese">Chinese</option>
			<option value="Other">Other</option>
		</select>
	</div>
);
export default SpecialtyLanguage;
