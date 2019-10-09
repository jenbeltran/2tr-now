const SpecialtyBusiness = (props) => (
	<div>
		<select name={props.name} value={props.value} onChange={props.onChange}>
			<option value="selecting">Select a Specialty</option>
			<option value="Accounting">Accounting</option>
			<option value="Finance">Finance</option>
			<option value="HumanResources">Human Resources</option>
			<option value="Marketing">Marketing</option>
			<option value="Other">Other</option>
		</select>
	</div>
);
export default SpecialtyBusiness;
