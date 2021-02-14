import React from "react";
import { CreditCard, Refund, Shipped, Support } from "../../assets/index";
function Section2() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 desc">
          <img src={Shipped} alt="" />
          <h3>Free Shopping</h3>
          <p>FROM 40 EUR</p>
        </div>
        <div className="col-md-3 desc">
          <img src={Support} alt="" />
          <h3>Support Customer</h3>
          <p>24 HOURS A DAY</p>
        </div>
        <div className="col-md-3 desc">
          <img src={CreditCard} alt="" />
          <h3>Secure Paymant</h3>
          <p>100% SECURE PAYMANT</p>
        </div>
        <div className="col-md-3 desc">
          <img src={Refund} alt="" />
          <h3>30 Days Return</h3>
          <p>SIMPLY RETURN 30 DAYS</p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
