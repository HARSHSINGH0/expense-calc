import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(params) {
	return (
		<div className="expense-item">
			<div>
				<ExpenseDate date={params.date} />
			</div>
			<div className="expense-item__description">
				<h2>{params.title}</h2>
				<div className="expense-item__price">₹{params.amount}</div>
			</div>
		</div>
	);
}
export default ExpenseItem;
