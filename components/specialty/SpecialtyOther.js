const SpecialtyOther = (props) => (
	<div>
		<select name={props.name} value={props.value} onChange={props.onChange}>
			<option value="selecting">Select a Specialty</option>
			<option value="Other">Other</option>
		</select>
	</div>
);
export default SpecialtyOther;
