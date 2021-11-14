import React from "react";
import "./DianaGirl.css";
import mainPhoto from "./img/diana.png";

export  default class DianaGirlInner extends React.Component {
	render() {
		return (
			<div className="col-6 dianaGirlPhoto" id="dianaGirlMain"
					style={{'backgroundImage': `url(${mainPhoto})` }}>
					<div className="dianaGirlPhoto"  style={{'backgroundImage': `url(${this.props.dress.imgSrc})` }} >

					</div>
			</div>
		)
	}

}