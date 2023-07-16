import { useState } from "react";
import React from "react";
import s1 from "../assets/Stage 1.png";
import s2 from "../assets/Stage 2.png";
import roz from "../assets/rpay.png";
import vec from "../assets/Vector.png";

const Rate = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [totalPrice, setTotalPrice] = useState(179);
  const [discount, setDiscount] = useState(18401);

  const handlePlanChange = (e) => {
    const { value } = e.target;
    setSelectedPlan(value);

    
    if (value === "12 Months Subscription") {
        setTotalPrice(179);
        setDiscount(30);
      } else if (value === "6 Months Subscription") {
        setTotalPrice(149);
        setDiscount(10);
      } else if (value === "3 Months Subscription") {
        setTotalPrice(99);
        setDiscount(5);
      }
  };

  const getTotalWithDiscount = () => {
    return totalPrice - discount;
  };

  return (
    <div className="rate">
      <div className="logo-sig">
        <div>
          <img src={s1} height="40px" alt="" />
        </div>
        <div>
          <img src={s2} height="40px" alt="" />
        </div>
      </div>
      <p
        style={{ textAlign: "center", marginBottom: "2px", marginTop: "2px" }}
      >
        Select your subscription plan
      </p>

      <div className="offer">
        <span className="exp">Offer Expired</span>
        <div className="rc-flex" style={{background:"rgba(231, 231, 231, 1)",border:"2px solid red"}}> 
          <div>
            <label className="fw-600" style={{color:" rgba(190, 190, 190, 1)"
}}>
             
              12 Months Subscription
            </label>
          </div>

          <div style={{ fontSize: 12 ,color:" rgba(190, 190, 190, 1)"}} className="fw-400" >
            Total <span className="fw-600">99</span>{" "}
            <p className="month">
              <span>15</span>/month
            </p>
          </div>
        </div>
      </div>

      <div className="offer">
      <span className="exp" style={{background:"green"}}>Recommended</span>
        <div className="rc-flex">
          <div>
            <label className="fw-600">
              <input
                type="radio"
                name="subscription"
                value="12 Months Subscription"
                checked={selectedPlan === "12 Months Subscription"}
                onChange={handlePlanChange}
              />
              12 Months Subscription
            </label>
          </div>

          <div style={{ fontSize: 12 }} className="fw-400">
            Total <span className="fw-600">179</span>{" "}
            <p className="month">
              <span>15</span>/month
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="rc-flex" style={{background:"white",border:"2px solid rgba(190, 190, 190, 1)"}}>
          <div>
            <label className="fw-600">
              <input
                type="radio"
                name="subscription"
                value="6 Months Subscription"
                checked={selectedPlan === "6 Months Subscription"}
                onChange={handlePlanChange}
              />
              6 Months Subscription
            </label>
          </div>

          <div style={{ fontSize: 12 }} className="fw-400">
            Total <span className="fw-600">149</span>{" "}
            <p className="month">
              <span>25</span>/month
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="rc-flex" style={{background:"white",border:"2px solid rgba(190, 190, 190, 1)"}}>
          <div>
            <label className="fw-600">
              <input
                type="radio"
                name="subscription"
                value="3 Months Subscription"
                checked={selectedPlan === "3 Months Subscription"}
                onChange={handlePlanChange}
              />
              3 Months Subscription
            </label>
          </div>

          <div style={{ fontSize: 12 }} className="fw-400">
            Total <span className="fw-600">99</span>{" "}
            <p className="month">
              <span>33</span>/month
            </p>
          </div>
        </div>
      </div>

      <div className="sub-flex mar">
        <p className="fw-400">Subscription Fee</p>
        <p className="fw-400">₹18,500</p>
      </div>

      <div className="sub-flex fw-400 ">
        <div style={{ color: "#DE4313",paddingLeft:"15px" }}>
          Limited time
          <p className="sub-flex fw-400" style={{fontSize:"12px"}}>
            <span>
              <img src={vec} height="12px" style={{paddingRight:"6px"}} alt="" />
            </span>
            Offer valid till 25th March 2023
          </p>
        </div>
        <div style={{ color: "#DE4313",paddingRight:"15px" }}>- ₹{discount}</div>
      </div>

      <div className="sub-flex mar">
        <p className="fw-400"> Total (Incl. of 18% GST)</p>
        <p className="fw-600">₹{getTotalWithDiscount()}</p>
      </div>
      {/* buttons <section></section> */}
      <div className="mar sub-flex">
        <button className="cancel fw-600">Cancel</button>
        <button className="proceed fw-600" style={{ color: "white" }}>
          Proceed
        </button>
      </div>

      <div className="mar">
        <img src={roz} alt="" />
      </div>
    </div>
  );
};

export default Rate;
