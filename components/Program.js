const Program = (props) => (
	<div>
		<select name={props.name} value={props.value} onChange={props.onChange}>
			<option value="selecting">Select a Program</option>
			<option value="Business">Business</option>
			<option value="Math">Math</option>
			<option value="Science">Science</option>
			<option value="ForeignLanguage">Foreign Languages</option>
			<option value="Other">Other</option>
		</select>
	</div>
);
export default Program;
