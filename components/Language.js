const Language = (props) => (
	<div>
		<select name={props.name} value={props.value} onChange={props.onChange}>
			<option value="selecting">Select a Language</option>
			<option value="English">English</option>
			<option value="French">French</option>
			<option value="Spanish">Spanish</option>
			<option value="Italian">Italian</option>
			<option value="Portugese">Portugese</option>
			<option value="Chinese">Chinese</option>
		</select>
	</div>
);
export default Language;
