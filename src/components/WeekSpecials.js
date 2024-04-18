import { FoodData } from "./FoodData";
import FoodCard from "./FoodCard";

function WeekSpecials() {
  return (
    <div className="SpecialContainer">
      <div className="SpecialRow">
        <h3>This Week Specials!</h3>
        <a>Online menu</a>
      </div>
      {FoodData.map((food, index) => (
        <FoodCard
          key={index}
          name={food.name}
          image={food.image}
          price={food.price}
          description={food.description}
        />
      ))}
    </div>
  );
}

export default WeekSpecials;
