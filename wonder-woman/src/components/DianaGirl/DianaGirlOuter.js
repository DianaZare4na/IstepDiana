import React from 'react';
import "./DianaGirl.css";
import l from "./img/armor/left.png";
import r from "./img/armor/right.png";
import s from "./img/armor/sword.png";
import w from "./img/summer/wonder.png";
import b from "./img/summer/8.png";
import bl from "./img/summer/9.png";
import f from "./img/winter/13.png";
import d from "./img/winter/14.png";
import c from "./img/winter/15.png";
import march from "./img/spring/11.png";
import april from "./img/spring/12.png";
import may from "./img/spring/blue.png";
import sep from "./img/autumn/10.png";
import oct from "./img/autumn/16.png";
import nov from "./img/autumn/black.png";
import DianaGirlInner from "./DianaGirlInner";


export default class DianaGirlOuter extends React.Component {

	constructor(props) {
		super(props);

		this.state={
			select_dress: 0,
			dress: [],
			dress_summer: [
					{name: "none", imgSrc: null, },
					{name: "wonder", imgSrc: w, },
					{name: "black", imgSrc: b, },
					{name: "blue", imgSrc: bl, }
			],
			dress_winter:[
					{name: "none", imgSrc: null, },
					{name: "fur", imgSrc: f, },
					{name: "coat", imgSrc: c, },
					{name: "down", imgSrc: d, }
			],
			dress_spring:[
				{name: "none", imgSrc: null, },
				{name: "march", imgSrc: march, },
				{name: "april", imgSrc: april, },
				{name: "may", imgSrc: may, }
			],
			dress_autumn:[
				{name: "none", imgSrc: null, },
				{name: "sep", imgSrc: sep, },
				{name: "oct", imgSrc: oct, },
				{name: "nov", imgSrc: nov, }
			],

			select_armor: [],
			armor: [
					{name: "none", imgSrc: null, },
					{name: "left", imgSrc: l,},
					{name: "right", imgSrc: r,},
					{name: "sword", imgSrc: s,},
			]

		}
	}

changeDress(el) {
	console.log("start change dress");
	this.setState({select_dress: el.target.getAttribute('data-dressindex')});

}
changeArmor(el){
	//console.log(el.target.getAttribute('data-armorindex'));
	let index = el.target.getAttribute('data-armorindex');
	let select_armor = this.state.select_armor;
	select_armor = select_armor.includes(index)
		? select_armor.filter(a => a!== index)
		:[...select_armor, index];

	this.setState({select_armor: select_armor});
}



render() {

	if(this.props.seasons.name === "Summer") {
		this.state.dress = this.state.dress_summer
	} else if(this.props.seasons.name === "Winter"){
		this.state.dress  = this.state.dress_winter
	}else if(this.props.seasons.name === "Spring"){
		this.state.dress  = this.state.dress_spring
	}else{
		this.state.dress  = this.state.dress_autumn
	}

	return(

		<section className="row">
			<ul className="col-3" id="lstDress">
					{
						this.state.dress.map((dress, index) =>

							<li data-dressindex={index} key={'dress_num' + index} onClick={this.changeDress.bind(this)}>
									<img src={dress.imgSrc} data-dressindex={index}  />
							</li>
						)
					}
			</ul>

			<DianaGirlInner dress={this.state.dress[this.state.select_dress]}
									// armor={this.state.armor}
									// select_armor={this.state.armor}
			></DianaGirlInner>
			{/* <ul className="col-3" id="lstArmor">
					{
						this.state.armor.map((armor, index) =>

							<li data-armorindex={index} key={'armor_num' + index} onClick={this.changeArmor.bind(this)}>
									{armor.name}
									<img src={armor.imgSrc} data-armorindex={index}  />
							</li>
						)
					}
			</ul> */}
		</section>
	)
}


}