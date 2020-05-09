import React, { Component } from "react";
import CardList from "../card/cardlist";
import Search from "../search/search";
import Scroll from "./scroll";
 import Loader from 'react-loader-spinner'




class Home extends Component {
	constructor() {
		super(); //fr accesing parents and other class memmbers
		this.state = {
			robots: [], //state is used to store all modifying members(dynamic props)
			searchfield: "",
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ robots: users }));
	}

	onsearchchange = (
		event //fun to to change input value
	) => {
		this.setState({ searchfield: event.target.value });
		//console.log(this.state.searchfield);
		//console.log(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=shops+in+${this.state.searchfield}&key=AIzaSyBfD2yrN-ho5UblVPKYVTzKulkmZhNFxkU`); // main thing
	};

	render() {
		const frobots = this.state.robots.filter(
			(
				robots //take the changed value and change in states robots name
			) => {
				return robots.name
					.toLowerCase()
					.includes(this.state.searchfield.toLowerCase());
			}
		);

		if (frobots.length === 0) {
			return (
				<div className="tc ">
					<Search searchchange={this.onsearchchange} />
					   <div
        className = " f2"
       >Loading....</div>
					 <Loader
		 className =""
         type="TailSpin"
         color="#000000"
         height={700}
         width={200}
         timeout={3000} //3 secs

 
      />

					 
				</div>
			);
		} else {
			return (
				<div className="tc">
					<Search searchchange={this.onsearchchange} />
					<Scroll>
						<CardList robots={frobots} />
					</Scroll>
				</div>
			);
		}
	}
}
export default Home;
