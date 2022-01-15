function ExpenseDate(params) {
	const month = params.date.toLocaleDateString("en-US", { month: "long" });
	const year = params.date.getFullYear();
	const day = params.date.toLocaleDateString("en-US", { day: "2-digit" });
	return (
		<div>
			<div>{month}</div>
			<div>{year}</div>
			<div>{day}</div>
			<div>{day}</div>
		</div>
	);
}
export default ExpenseDate;
