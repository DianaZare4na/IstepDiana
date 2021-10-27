import React from "react";

// задача компонента -  id артиста и показать его альбомы

export default class BaseAlbums extends React.Component {
    constructor(props) {
        super(props); // Вызов конструктора предка

        // Состояние компонента
        this.state = {
            error: null, // Состояние ошибки
            isLoaded: false, // Состояние загрузки
            items: [], //
            //* ------------------------------
            isCache: false
        }
    }

    com() {
        this.getItemsFromLocalStorage();
    }

    putItemsToLocalStorage(){
        window.localStorage.setItem(
            "baseAlbums_" + this.props.artistId,
            JSON.stringify(this.state.items)
        );
    }

    getItemsFromLocalStorage(){
        console.log("From LS");
        if(
            window.localStorage.getItem(
                "baseAlbums_" + this.props.artistId
            )=== null
            ||
            window.localStorage.getItem(
                "baseAlbums_" + this.props.artistId
            ).length === 0
        ) {
            // Если в кеше нету, или он пустой (из-за спешки в обращении
            this.setState({
                items: [],
                isLoaded: false,
                isCache: false
            });
            this.getFromApi();
        } else {
            this.setState({
                items: JSON.parse(localStorage.getItem("baseAlbums_" + this.props.artistId)),
                isLoaded: true,
                isCache: true
            })
        }
    }

    getFromApi(){
        console.log("Ask album from Api");
        fetch("https://unsa-unofficial-spotify-api.p.rapidapi.com/album"  + this.props.artistId, {
					"method": "GET",
					"headers": {
						"x-rapidapi-host": "unsa-unofficial-spotify-api.p.rapidapi.com",
						"x-rapidapi-key": "b5a38f556emsh0c472e1de221194p1c7771jsn33bf9c1c6ddf"
					}
            })
            .then(response => {
                console.log(response);
                // Код ошибки
                return response.json();
            })
            .then( result => {
                console.log(result);
                this.setState({
                    isLoaded: true,
                    items: result,
                    isCache: false
                });
                // this.putItemsToLocalStorage();
            })
            .catch(err => {
                console.error(err);
            });
    }



    render() {
        return(
            <p>{this.props.artistId}</p>
        )
    }

    // Компонент в состоянии загрузки
    renderLoading(){
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    // Отображение компонента в состоянии ошибки
    renderError(){
        return (
            <div className="alert alert-danger" role="alert">
                Error: {this.state.error.message}
            </div>
        );
    }


}