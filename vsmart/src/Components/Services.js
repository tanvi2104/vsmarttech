import React from 'react';
import "./Services.css";
import back from "../images/back.png";
import phone from "../images/phone.png";
import charge from "../images/charge.png";
import display from "../images/display.png";
import ic from "../images/ic.png";
import laptop from "../images/laptop.png";
import motherboard from "../images/motherboard.png";
import network from "../images/network.png";
import software from "../images/software.png"; 

const Services = () =>{
	return(
	<>
	<section className="service-head">
		<h2>Services Provided</h2>
		<div className="paddings innerWidth service-grid1">
			<div className="s1">
                <img className="s-image" src={phone}/>
                <h5 className="s-title">Phone Solutions</h5>
            </div>
            <div className="s1">
                <img className="s-image" src={back}/>
                <h5 className="s-title">Back Camera Solutions</h5>
            </div>
            <div className="s1">
                <img className="s-image" src={charge}/>
                <h5 className="s-title">Charging Solutions</h5>
            </div>
            <div className="s1">
                <img className="s-image" src={display}/>
                <h5 className="s-title">Display Solutions</h5>
            </div>
		</div>

		<div className="paddings innerWidth service-grid2">
			<div className="s1">
                <img className="s-image" src={ic}/>
                <h5 className="s-title">IC Solutions</h5>
            </div>
            <div className="s1">
                <img className="s-image" src={laptop}/>
                <h5 className="s-title">Laptop Solutions</h5>
            </div>
            <div className="s1">
                <img className="s-image" src={motherboard}/>
                <h5 className="s-title">Motherboard Solutions</h5>
            </div>
            <div className="s1">
                <img className="s-image" src={network}/>
                <h5 className="s-title">Network Solutions</h5>
            </div>
		</div>

		<div className="paddings innerWidth service-grid3">
			<div className="s1">
                <img className="s-image" src={software}/>
                <h5 className="s-title">Software Solutions</h5>
            </div>
		</div>
	</section>
	</>
	);
}

export default Services;