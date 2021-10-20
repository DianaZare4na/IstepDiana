
import React from "react";

export  default class PageHome extends React.Component {
    constructor(props) {
        super(props); // Вызов конструктора предка

        // Состояние компонента
        this.state = {
            error: null, // Состояние ошибки
            isLoaded: true, // Состояние загрузки
            items: [] // Данные для отображения в компаненте
        }

    }


    // Этот метод будет отрабатывать каждый раз при отрисовке компонента
    render(){
        if(this.state.error) return this.renderError(); // Если ошибка - вывожу ее
        if(!this.state.isLoaded) return this.renderLoading(); // Загружаюсь
        return this.renderData();
    }

    // Вывод основного состояния компонента
    renderData(){
        return (
				<div>
					<div className='col'>
						<p className="organization-p-first-top">Организация корпоративных и праздничных мероприятий</p>
					</div>
					<div className='col'>
						<h1>Ивент-агенство KING</h1>
					</div>
					<div className='col-4'>
						<div className='button-event-block'>
							<div className='button-event-left'></div>
							<div className="button-event-top">
								<div className='button-event-top-left'></div>
								<div className='button-event-top-right'></div>
							</div>
							<div className="button-event-a-flex">
								<div className="button-event-a-left"></div>
								<div>
									<a href="#" className='button-event' type="button">Заказать ивент</a>
								</div>
								<div className="button-event-a-right"></div>
							</div>
							<div className="button-event-down">
								<div className='button-event-down-left'></div>
								<div className='button-event-down-right'></div>
							</div>
							<div className='button-event-right'></div>
						</div>
					</div>

				</div>
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