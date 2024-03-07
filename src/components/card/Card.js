import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Card.css";
import { useHistory } from "react-router-dom";
export default function Card(props) {
  /*const loadchart = () => {
    //console.log(props.id);
    props.func(props.id);
  };*/

  const history = useHistory();
  const handleClick = (data) => {
    history.push({
      pathname: "/Charts",
      state: data
    });
    //console.log("pushed to history " + history.location.state);
  };
  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="card align-items-center" style={{ width: "20rem" }}>
        <img
          className="card-img"
          src={props.image}
          alt="not found"
          height="200px"
          width="100px"
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Price(INR): &#8377;{props.current_price} </p>
          <button
            className="btn btn-secondary"
            onClick={() => handleClick(props.value)}
          >
            More Information
          </button>
        </div>
      </div>
    </div>
  );
}
/*<div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id={"heading" + props.id}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#collapse" + props.id}
                  aria-expanded="true"
                  aria-controls={"collapse" + props.id}
                >
                  More Information
                </button>
              </h2>
              <div
                id={"collapse" + props.id}
                className="accordion-collapse collapse"
                aria-labelledby={"heading" + props.id}
              >
                <div className="accordion-body">
                  <p className="card-text">Symbol: {props.symbol}</p>
                  <p className="card-text">
                    Price Change: {props.price_change_percentage}%
                  </p>
                  <p className="card-text">
                    Circulating Supply: {props.supply}
                  </p>
                </div>
              </div>
            </div>
  </div>*/
