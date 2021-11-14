import React from 'react';
import "./DianaGirl.css";
import DianaGirlOuter from "./DianaGirlOuter";

export default class DianaGirl extends React.Component {

	constructor(props) {
		super(props);

		this.state={
			select_set: 0,
			seasons: [
					{name: "Armor",},
					{name: "Winter",},
					{name: "Spring",},
					{name: "Summer",},
					{name: "Autumn",},
			]

		}
	}

	changeSeasons(el) {
		console.log("start change set");
		this.setState({select_set: el.target.getAttribute('data-setindex')});

	}

	render() {
		return(
			<section className="row">
					<ul className="col-12" id="lstSeasons">
						{
							this.state.seasons.map((seasons, index) =>

									<li data-setindex={index} key={'set_num' + index} onClick={this.changeSeasons.bind(this)}>
										{seasons.name}

									</li>
							)
						}

					</ul>
			<div className="col-12">
					<DianaGirlOuter seasons={this.state.seasons[this.state.select_set]}

					></DianaGirlOuter>
			</div>
			</section>
		)
	}


}