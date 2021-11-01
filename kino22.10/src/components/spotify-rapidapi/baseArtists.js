import React from "react";

// задача компонента - принять название группы, и получить  ее id в базе
export default class BaseArtists extends React.Component {

    constructor(props) {
        super(props); // Вызов конструктора предка
        // console.log(this.props.items);
    }

    onClick(el){
        //console.log(el.target.id);
        this.props.onArtistSelected(el.target.id);
    }

    // <img src={item.images[0] && item.images[0].url }/>
    render(){
        if(this.props.items !== undefined && this.props.items !== null) {
            return (
                <ul>
                    {
                        this.props.items.map(item =>
                            <li key={item.id} name={item.id} id={item.id} onClick={this.onClick.bind(this)}>
                                {item.name}
                            </li>
                        )
                    }
                </ul>
            )
        }
        else {
            return (
                <ul>
                    <li> No Data </li>
                </ul>
            )
        }
    }
}