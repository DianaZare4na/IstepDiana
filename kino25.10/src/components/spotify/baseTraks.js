import React from "react";

// задача компонента -  id артиста и показать его альбомы

export default class BaseTraks extends React.Component {
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


    componentDidMount() {
        if(this.props.artistId === null) return;
        if(this.props.artistId === "") return;
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
        fetch(
            //https://api.spotify.com/v1/artists/{id}/albums
            "https://api.spotify.com/v1/artists/" + this.props.artistId + "/top-tracks",
            {
                "method": "GET",
                "headers": {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": 'Bearer ' + 'BQB4un97EGSn2dW9S9cVINDUAWbBxJgeFDavQ0XRI25-qPuAae6F8pMOa27D6SxJjld9g8GehkQRh6HWODbATe5uYpbkfOjStgD1_u_3NxzZXI5k3EeElaHaUhdLgV3rpMhai-SbawU2MuuhA_R3yq2zvKsy52g'
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
                    items: result.items,
                    isCache: false
                });
                this.putItemsToLocalStorage();
            })
            .catch(err => {
                console.error(err);
            });
    }



    render() {
        if(this.state.items !== undefined && this.state.items !== null) {
            return (
                <ul className="renAlb" >
                    {
                        this.state.items.map(item =>
                            <li key={item.id} name={item.id} id={item.id}>
                                {item.name}
                            </li>
                        )
                    }
                </ul>
            )
        } else return (
            <p> No Data for albums </p>
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