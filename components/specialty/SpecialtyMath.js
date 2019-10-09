const SpecialtyMath = (props) => (
	<div>
		<select name={props.name} value={props.value} onChange={props.onChange}>
			<option value="selecting">Select a Specialty</option>
			<option value="Calculus">Calculus</option>
			<option value="Statistics">Statistics</option>
			<option value="Functions">Functions</option>
			<option value="Algebra">Algebra</option>
			<option value="Other">Other</option>
		</select>
	</div>
);
export default SpecialtyMath;
