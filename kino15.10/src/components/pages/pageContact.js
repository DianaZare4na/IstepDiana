import React from "react";
import HeaderPage from "../design/headerPage";

export default class PageContact extends React.Component {

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
                <HeaderPage title={"Contact"}></HeaderPage>
					 <section className="probootstrap_section bg-light" id="section-contact">
						<div className="container">
							<div className="row">
								<div className="col-md-6 probootstrap-animate">
									<p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
									<div className="row">
										<div className="col-md-6">
											<ul className="probootstrap-contact-details">
												<li>
													<span className="text-uppercase"><span className="ion-paper-airplane"></span> Email</span>
													you_mail@gmail.com
												</li>
												<li>
													<span className="text-uppercase"><span className="ion-ios-telephone"></span> Phone</span>
													+30 976 1382 9921
												</li>
											</ul>
										</div>
										<div className="col-md-6">
											<ul className="probootstrap-contact-details">
												<li>
													<span className="text-uppercase"><span className="ion-ios-telephone"></span> Fax</span>
													+30 976 1382 9922
												</li>
												<li>
													<span className="text-uppercase"><span className="ion-location"></span> Address</span>
													San Francisco, CA <br></br>
													4th Floor8 Lower  <br></br>
													San Francisco street, M1 50F
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-md-6  probootstrap-animate">
									<form className="probootstrap-form probootstrap-form-box mb60">
									<div className="row mb-3">
										<div className="col-md-6">
											<div className="form-group">
											<label htmlFor="fname" className="sr-only sr-only-focusable">First Name</label>
											<input type="text" className="form-control" id="fname" name="fname" placeholder="First Name"/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
											<label htmlFor="lname" className="sr-only sr-only-focusable">Last Name</label>
											<input type="text" className="form-control" id="lname" name="lname" placeholder="Last Name"/>
											</div>
										</div>
									</div>
									<div className="form-group">
										<label htmlFor="email" className="sr-only sr-only-focusable">Email</label>
										<input type="email" className="form-control" id="email" name="email" placeholder="Email"/>
									</div>
									<div className="form-group">
										<label htmlFor="message" className="sr-only sr-only-focusable">Message</label>
										<textarea cols="30" rows="10" className="form-control" id="message" name="message" placeholder="Write your message"></textarea>
									</div>
									<div className="form-group">
										<input type="submit" className="btn btn-primary" id="submit" name="submit" value="Send Message"/>
									</div>
									</form>
								</div>
							</div>
						</div>
					</section>
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
