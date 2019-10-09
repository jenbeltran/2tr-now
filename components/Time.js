const Time = (props) => (
	<div>
		<select name={props.name} value={props.value} onChange={props.onChange}>
			<option value="selecting">Select Time Needed</option>
			<option value="10">10 minutes</option>
			<option value="20">20 minutes</option>
			<option value="30">30 minutes</option>
			<option value="40">40 minutes</option>
			<option value="50">50 minutes</option>
			<option value="60">60 minutes</option>
		</select>
	</div>
);
export default Time;
