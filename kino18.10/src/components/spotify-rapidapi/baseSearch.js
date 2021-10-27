import React from "react";
import BaseArtists from "./baseArtists";
import BaseAlbums from "./baseAlbums";

// задача компонента - принять название группы, и получить  ее id в базе
export default class BaseSearch extends React.Component {

    constructor(props) {
        super(props); // Вызов конструктора предка

        // Состояние компонента
        this.state = {
            error: null, // Состояние ошибки
            isLoaded: false, // Состояние загрузки
            items: [], // Данные которые нашла поисковая система по запросу
            //* ------------------------------
            strToSearch: "", // Ввод пользователя
            isCache: false,
            artistId: ""
        }
    }

    putItemsToLocalStorage(){
        window.localStorage.setItem(
            "baseSearch_" + this.state.strToSearch,
            JSON.stringify(this.state.items)
        );
    }

    getItemsFromLocalStorage(){
        if(
            window.localStorage.getItem(
            "baseSearch_" + this.state.strToSearch
            )=== null
            ||
            window.localStorage.getItem(
                "baseSearch_" + this.state.strToSearch
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
                items: JSON.parse(localStorage.getItem("baseSearch_" + this.state.strToSearch)),
                isLoaded: true,
                isCache: true
            })
        }
    }

    getFromApi(){
        console.log("Ask Api");
        fetch(
            "https://unsa-unofficial-spotify-api.p.rapidapi.com/search?query="+ this.state.strToSearch
            + "&count=20&type=artists",
            {
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
                this.setState({
                    isLoaded: true,
                    items: result.Results,
                    isCache: false
                });
                this.putItemsToLocalStorage();
            })
            .catch(err => {
                console.error(err);
            });
    }

    onChange(el){
        this.setState({strToSearch: el.target.value});
    }

    onClick(){
        this.getItemsFromLocalStorage();
    }

    onArtistSelected(id){
        //console.log(id.key);
        this.setState({artistId: id});
    }

    // Этот метод будет отрабатывать каждый раз при отрисовке компонента
    render(){
        if(this.state.error) return this.renderError(); // Если ошибка - вывожу ее
        // if(!this.state.isLoaded)
        return this.renderForm(); // Если ничего не загружено - форма
        // return this.renderData();
    }

    renderForm(){
        return(
            <form  className="row row-cols-lg-auto g-3 align-items-center">
                <div className="col-8">
                    <div className="input-group">
                        <input type="text" value={this.state.strToSearch} onChange={this.onChange.bind(this)} className="form-control" id="Artist" placeholder="Artist or Group"/>
                    </div>
                </div>
                <div className="col-4">
                    <button type="button" className="btn btn-primary" onClick={this.onClick.bind(this)}>Submit</button>
                </div>
                <BaseArtists
                    items={this.state.items}
                    key={this.state.strToSearch}
                    onArtistSelected={this.onArtistSelected.bind(this)}
                ></BaseArtists>
                <BaseAlbums
                    artistId={this.state.artistId}
                    key={this.state.artistId}
                >
                </BaseAlbums>
            </form>
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
