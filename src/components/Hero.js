import image from "../src/icons_assets/restauranfood.jpg"

function Hero() {
    return (
      <div className="Hero">
        <div className="HeroContainer">
            <div className="HeroRow">
                <div className="HeroDivs">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <a href="#" className="button">Reserve a table</a>
                </div>
                <div className="HeroDivs"><img src={image}></img></div>
            </div>
        </div>
      </div>
    );
  }
  export default Hero;