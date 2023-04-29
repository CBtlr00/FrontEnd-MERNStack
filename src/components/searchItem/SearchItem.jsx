import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m from centre</span>
        <span className="siTaxiOp">Travel Sustainable property</span>
        <span className="siSubtitle">
          Luxurious {item.type} with air conditioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
<<<<<<< HEAD
          <span>
            {item.rating <= 3 ? "Good" : item.rating <= 4 ? "Very Good": item.rating === 2 ? "Basic" : "Excellent"}
          </span>
=======
          <span>Good</span>
>>>>>>> c36f1270eb3e78c10c871df7ebb76b5306d4d4e4
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">€{item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
