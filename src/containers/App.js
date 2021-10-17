import React from 'react';
import {CardList} from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import "./App.css";
import Popup from '../components/Popup';



class App extends React.Component{
	constructor(){
		super();
		this.state={
			robots:[],
			searchfield:"",
			popup:false
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(responce => {
			return responce.json()
		})
		.then(user => {
			this.setState({robots:user});
		})
	}


	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value});
	}

	openPopup=()=>{
		this.setState({popup:true});
	}

	closePopup=() => {
		this.setState({popup:false});
	}


	render(){

		const {robots,searchfield}=this.state;

		const filteredRobots=robots.filter((robot)=>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		return !filteredRobots.length ?
			 <h1>Loading.....</h1> :
			(
				<React.Fragment>
					{this.state.popup ? <Popup closePopup={this.closePopup}/> : ""}
					<div className="tc">
						<h1>{filteredRobots.length === 0 ? "no robots" : "Robofans"}</h1>
						<button onClick={this.openPopup}>Open Popup</button>
						<SearchBox searchChange={this.onSearchChange}/>
						<Scroll>
							<CardList robots={filteredRobots}/>
						</Scroll>
						<footer>Designed by ARC</footer>
					</div>
				</React.Fragment>
		)
		
	}
}
export default App;