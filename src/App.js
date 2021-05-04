import React from "react";
import axios from "axios";
import "./App.css";
class App extends React.Component {
	state = {
		advice: " ",
	};
	componentDidMount() {
		//console.log("COMPONENT DID MOUNT");
		this.fetchAdvice();
	}
	fetchAdvice = () => {
		axios
			.get("https://api.adviceslip.com/advice")
			.then((response) => {
				const { advice } = response.data.slip;
				//console.log(response.data.slip.advice);
				this.setState({ advice: advice });
			})
			.catch((error) => {
				console.log(error);
			});
	};
	render() {
		const { advice } = this.state;
		return (
			<div className="app">
				<div className="card">
					<h1 className="heading">{advice}</h1>
					<button className="button" onClick={this.fetchAdvice}>
						<span>NEW QUOTE !</span>
					</button>
				</div>
			</div>
		);
	}
}
export default App;
