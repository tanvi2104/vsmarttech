import React from 'react';
import "./Hero.css";
import mobile from "../images/mobile.jpg";

const Hero = () =>{
	return(
	<>
	<section className="hero-wrapper">
		<div className="paddings innerWidth flexCenter hero-container">
			<div className="hero-left">
				<div className="img-container">
					<img src={mobile} alt="pic" />
				</div>
			</div>
			<div className="flexColStart hero-right">
			    <div className="hero-title">
					<h2>V Smart Tech <br/>Mobile Solutions</h2>
				</div>
			</div>
		</div>
	</section>
	</>
	);
}

export default Hero;