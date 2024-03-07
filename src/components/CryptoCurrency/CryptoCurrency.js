import { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";
import axios from "axios";
import "./CryptoCurrency.css";
import "../chart/Charts";
import Card from "../card/Card";
import { ScaleLoader } from "react-spinners";
//import Charts from "../chart/Charts";

export default function CryptoCurrency() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(6);
  const [loading, setLoading] = useState(false);
  //const [idvalue, setIdvalue] = useState();

  //const history = useHistory();

  /*const pull_data = (data) => {
    console.log("pull_data " + data);
    //setIdvalue(data);
  };*/

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [limit]);

  const loadMore = () => {
    setLimit(limit + 12);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="crypto">
      {loading ? (
        <div className="">
          <form className="mt-3">
            <input
              autoFocus
              type="text"
              placeholder="Search"
              className="coin-input"
              onChange={handleChange}
            />
          </form>
          <div className="row">
            {filteredCoins.map((data, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-12">
                  <Card
                    name={data.name}
                    key={data.id}
                    image={data.image}
                    current_price={data.current_price}
                    value={data}
                  />
                </div>
              );
            })}
          </div>
          <button className="btn btn-secondary" onClick={loadMore}>
            Load More
          </button>
        </div>
      ) : (
        <div className="loader">
          <ScaleLoader loading size={25} color="#fff" />
        </div>
      )}
    </div>
  );
}
/*<div style={{ backgroundColor: "white" }}>
        <Charts idvalue={idvalue} />
</div>*/
