import React from "react";

export default class WidgetActorDOBItems extends React.Component {
    render ()
    {
        let img;
        if(this.props.a.image) img = (<img src={this.props.a.image.url} alt="Free Template by ProBootstrap"  className="img-fluid"/>)
        return (
                <div className="media probootstrap-media d-block align-items-stretch mb-4 probootstrap-animate">
                    {img}
                    <div className="media-body">
                        <h5 className="mb-3">{this.props.a.legacyNameText}</h5>
                        <p>  </p>
                    </div>
                </div>
        )
    }

}