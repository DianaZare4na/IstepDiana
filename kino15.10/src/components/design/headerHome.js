import React from "react";

export  default class HeaderHome extends React.Component {

    render() {
        return (
            <section className="probootstrap-cover overflow-hidden relative" style={{backgroundImage: "url('assets/images/bg_1.jpg')"}} data-stellar-background-ratio="0.5" id="section-home">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md">
                            <h2 className="heading mb-2 display-4 font-light 1probootstrap-animate">Explore The World With Ease</h2>
                            <p className="lead mb-5 1probootstrap-animate">


                            </p>
                            <a href="onepage.html" role="button" className="btn btn-primary p-3 mr-3 pl-5 pr-5 text-uppercase d-lg-inline d-md-inline d-sm-block d-block mb-3">See OnePage Verion</a>
                    </div>
                    <div className="col-md 1probootstrap-animate">
                        <form action="#" className="probootstrap-form">
                            <div className="form-group">
                                <div className="row mb-3">
                                    <div className="col-md">
                                        <div className="form-group">
                                            <label htmlFor="id_label_single">From</label>

                                            <label htmlFor="id_label_single" style={{width: '100%'}}>
                                                <select className="js-example-basic-single js-states form-control" id="id_label_single" style={{width: '100%'}}>
                                                    <option value="Australia">Australia</option>
                                                    <option value="Japan">Japan</option>
                                                    <option value="United States">United States</option>
                                                    <option value="Brazil">Brazil</option>
                                                    <option value="China">China</option>
                                                    <option value="Israel">Israel</option>
                                                    <option value="Philippines">Philippines</option>
                                                    <option value="Malaysia">Malaysia</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="Chile">Chile</option>
                                                    <option value="Chile">Zimbabwe</option>
                                                </select>
                                            </label>


                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-group">
                                            <label htmlFor="id_label_single2">To</label>
                                            <div className="probootstrap_select-wrap">
                                                <label htmlFor="id_label_single2" style={{width: '100%'}}>
                                                    <select className="js-example-basic-single js-states form-control" id="id_label_single2" style={{width: '100%'}}>
                                                        <option value="Australia">Australia</option>
                                                        <option value="Japan">Japan</option>
                                                        <option value="United States">United States</option>
                                                        <option value="Brazil">Brazil</option>
                                                        <option value="China">China</option>
                                                        <option value="Israel">Israel</option>
                                                        <option value="Philippines">Philippines</option>
                                                        <option value="Malaysia">Malaysia</option>
                                                        <option value="Canada">Canada</option>
                                                        <option value="Chile">Chile</option>
                                                        <option value="Chile">Zimbabwe</option>
                                                    </select>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-5">
                                    <div className="col-md">
                                        <div className="form-group">
                                            <label htmlFor="probootstrap-date-departure">Departure</label>
                                            <div className="probootstrap-date-wrap">
                                                <span className="icon ion-calendar"></span>
                                                <input type="text" id="probootstrap-date-departure" className="form-control" placeholder=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-group">
                                            <label htmlFor="probootstrap-date-arrival">Arrival</label>
                                            <div className="probootstrap-date-wrap">
                                                <span className="icon ion-calendar"></span>
                                                <input type="text" id="probootstrap-date-arrival" className="form-control" placeholder=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md">
                                        <label htmlFor="round" className="mr-5"><input type="radio" id="round" name="direction"/>  Round</label>
                                        <label htmlFor="oneway"><input type="radio" id="oneway" name="direction"/>  Oneway</label>
                                    </div>
                                    <div className="col-md">
                                        <input type="submit" value="Submit" className="btn btn-primary btn-block"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </section>
    )
    }
}
    