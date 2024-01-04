import "./Home.css";
import Hero from "../Components/Hero.js";
import Services from "../Components/Services.js";
function Home()
{
	return(
	<>
	<section className="home">
	  <div className="flexCenter paddings innerWidth h-container">
	  	<img src="" alt="logo" />
	  	<div className="flexCenter h-menu">
	  		<a href="">Home</a>
	  		<a href="">About</a>
	  		<a href="">Contact</a>
	  		<a href="">Location</a>
	  		<a href="">WhatsApp</a>
	  	</div>
	  </div>
	  <Hero />
	  <Services />
	</section>
	</>
	);
}

export default Home;