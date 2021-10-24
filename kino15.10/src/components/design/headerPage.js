import React from "react";

export  default class HeaderPage extends React.Component {

    render() {
        return (
            <section className="probootstrap-cover overflow-hidden relative" style={{backgroundImage: "url('assets/images/bg_1.jpg')"}} data-stellar-background-ratio="0.5" id="section-home">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md">
                            <h2 className="heading mb-2 display-4 font-light 1probootstrap-animate">{this.props.title}</h2>

                            <p className="lead mb-5 1probootstrap-animate">
                            </p>
                    </div>
                </div>
            </div>

    </section>

    )
    }
}