import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const cities = ["Dublin", "New York", "London"];
  const { data, loading } = useFetch(`/hotels/countByCity?cities=${cities.join(",")}`);

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/682071.jpg?k=d7fb5b90756ec0cafe4350896101d959673d75796d3932cb8c4692bcbe6e6eb5&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Dublin</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>New York</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://q-xx.bstatic.com/xdata/images/city/410x307/613094.jpg?k=f751e035ae2c0ac97263ed7d150bae607ffa17a88c55e81cec907941d6bb078b&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
