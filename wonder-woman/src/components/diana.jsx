import React from "react";
import d from "../diana.png";
import l from "../left.png";
import r from "../right.png";
import w from "../wonder.png";
import s from "../sword.png";
import b from "../black.png";
import bl from "../blue.png";
export  default class Diana extends React.Component {

   constructor(props) {
      super(props); 

      this.state = {
            items: [
					{name: "left", imgSrc: l, className: "left", },
					{name: "right", imgSrc: r, className: "right", },
					{name: "wonder", imgSrc: w, className: "wonder", },
					{name: "sword", imgSrc: s, className: "sword", },
					{name: "black", imgSrc: b, className: "black", },
					{name: "blue", imgSrc: bl, className: "blue", }
				]
      }

   }

   componentDidMount(){
      this.render();
   }
   render(){
      return (
         <div className="row" >
				<div id="diana" >
					<img className="rowd" src={d} alt=""  />
				</div>
				<ul id="gallery">
                        {
                           this.state.items.map ( item =>
                              <img src={item.imgSrc} key={item.id} className={item.className} id={item.id}alt="" onClick={this.onClothes.bind(this)}/>
                           )
                        }
                  </ul>
			</div>
		);
	}
	onClothes(){
		let left = this.state.items[0].className;
		console.log(left);
		// this.setState({
			
		// });
	}
	shouldComponentUpdate(nextProps, nextState){
		console.log("shouldComponentUpdate");
		console.log(" Было: ");
		console.log(this.state);

		console.log(" Будет: ");
		console.log(nextState);

		return true;
  	}

  	componentDidUpdate(prevProps, prevState) {
		// console.log("componentDidUpdate");
		console.log(" Стало: ");
		console.log(this.state);

		console.log(" Было: ");
		console.log(prevState);

		return true;
  	}
  


}
