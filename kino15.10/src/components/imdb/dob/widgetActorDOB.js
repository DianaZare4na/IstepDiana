import React from "react";
import WidgetActorDOBItems from "./widgetActorDOBItem";

export default class WidgetActorDOB extends React.Component {

    constructor(props) {
        super(props); // Вызов конструктора предка

        // Состояние компонента
        this.state = {
            error: null, // Состояние ошибки
            isLoaded: false, // Состояние загрузки
            items: [], // Данные для отображения в компаненте
            actors: [] // тут будет конкретно информация о актерах
        }
    }

    // ShowWait(){ console.log(this.state.actors); }

    componentDidMount() {
        if(window.localStorage.getItem("actors"+ Date() )!== null){
            this.getFromLocalStorage();
            this.setState({isLoaded: true});
            // setTimeout(this.ShowWait.bind(this), 1000);
        } else {
            this.readAllFromDB();
        }
    }

    putToLocalStorage(){
        // + Date() - для сохранения даты
        window.localStorage.setItem("actors"+ Date() , JSON.stringify(this.state.actors) );
    }

    getFromLocalStorage(){
        this.setState({actors: JSON.parse( window.localStorage.getItem("actors" + Date()))});
    }

    readByOneFromDB(num){
        if (num > 5) {
            //this.putToLocalStorage();
            //this.setState({isLoaded: true});
            return;
        } // получать только 5 актеров
        let tmp = this.state.items[num].split('/'); // разбить строку для получения номера
        console.log(tmp);
        fetch("https://imdb8.p.rapidapi.com/actors/get-bio?nconst=" + tmp[2], {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "imdb8.p.rapidapi.com",
                "x-rapidapi-key": "b5a38f556emsh0c472e1de221194p1c7771jsn33bf9c1c6ddf"
            }
        })
            .then(response => response.json())
            .then(item => {
                const actors = this.state.actors;
                actors.push(item);
                this.setState({actors: actors});
                setTimeout(this.readByOneFromDB.bind(this),10, num+1);
                console.log("Finish");
            })
            .catch(err => {
                this.setState({
                    error: err
                })
                console.error(err);
            });
    }

    readAllFromDB(){
        let m = new Date().getMonth() + 1;
        let d = new Date().getDate();
        console.log(" " + m + " " + d);
        fetch("https://imdb8.p.rapidapi.com/actors/list-born-today?month=" + m + "&day=" + d, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "imdb8.p.rapidapi.com",
                "x-rapidapi-key": "b5a38f556emsh0c472e1de221194p1c7771jsn33bf9c1c6ddf"
            }
        })
            .then(response => response.json())
            .then(item => {
                this.setState({
                    items: item,
                    isLoaded: true
                });
                setTimeout(this.readByOneFromDB.bind(this),10, 0);
            })
            .catch(err => {
                this.setState({
                    error: err
                })
                console.error(err);
            });
    }




    // Этот метод будет отрабатывать каждый раз при отрисовке компонента
    render(){
        if(this.state.error) return this.renderError(); // Если ошибка - вывожу ее
        if(!this.state.isLoaded) return this.renderLoading(); // Загружаюсь
        return this.renderData();
    }

    // Вывод основного состояния компонента
    renderData(){

		if (this.state.actors === null){
			return (
				 <h3> No Actors </h3>
			)
	  }

	  return (
			<section className="probootstrap_section">
				 <div className="container">
					  <div className="row text-center mb-5 probootstrap-animate">
							<div className="col-md-12">
								 <h2 className="display-4 border-bottom probootstrap-section-heading">Именниники</h2>
							</div>
					  </div>

					  <div className="row probootstrap-animate">
							<div className="col-md-12">
								 <div className="owl-carousel js-owl-carousel-2">

									  {
											this.state.actors.map(a =>
												 <WidgetActorDOBItems key={a.id} a={a}></WidgetActorDOBItems>
											)
									  }





								 </div>
							</div>
					  </div>
				 </div>
			</section>

	  );
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
