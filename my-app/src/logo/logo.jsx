import React from "react";

export default class LogoImgage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: props.item, // сам элемент
            isEdit: false
        }
    }

    
    // Вывести на экран саму сущность (продукт)
    renderData() {
        return (
		<div className="logo-img-flex">
			<div className = "logo-img"></div>
			<div className="line-after-king"></div>
		</div>
        )
    }

    
    render() {
      return this.renderData();
    }

}