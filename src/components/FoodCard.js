function FoodCard({ image, name, price, description }) {
    return (
      <div className="FoodCard">
        <div className="FoodCardImage">
          <img src={image} alt={name} />
        </div>
        <div className="FoodCardHeader">
          <h3>{name}</h3>
          <span>${price}</span>
        </div>
        <div className="FoodCardBody">
          <p>{description}</p>
        </div>
      </div>
    );
  }
  export default FoodCard;