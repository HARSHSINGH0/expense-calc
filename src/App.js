import ExpenseItem from "./components/ExpenseItem";
function App() {
	const expenses = [
		{
			id: "e1",
			title: "Mutual Funds",
			amount: 7000,
			date: new Date(2022, 5, 16),
		},
		{
			id: "e2",
			title: "Stocks Reliance",
			amount: 2300,
			date: new Date(2022, 5, 16),
		},
		{
			id: "e3",
			title: "Ethereum Bought",
			amount: 1000,
			date: new Date(2022, 5, 16),
		},
	];
	return (
		<div className="App">
			<header className="App-header">
		test
				<ExpenseItem
					title={expenses[0].title}
					amount={expenses[0].amount}
					date={expenses[0].date}
				></ExpenseItem>
				<ExpenseItem
					title={expenses[1].title}
					amount={expenses[1].amount}
					date={expenses[1].date}
				></ExpenseItem>
				<ExpenseItem
					title={expenses[2].title}
					amount={expenses[2].amount}
					date={expenses[2].date}
				></ExpenseItem>
			</header>
		</div>
	);
}

export default App;
