import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { postRequest, getRequest } from "../utils/api";
import { getCardImage } from "../utils/helpers";

export default function ListPaymentMethods({ handleSelectCard }) {
  const [paymentMethods, setPaymentMethods] = useState(null);

  function getPaymentMethods() {
    postRequest('/payment/methods',{})
      .then((resp) => {
        console.log(resp.data);
        setPaymentMethods(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(getPaymentMethods, []);

  return (
    <div>
      <h3>Select your preferred payment method</h3>
      {paymentMethods &&
        paymentMethods.map((method) => (
          <div  onClick={handleSelectCard.bind(this, method)}>
            <div >
              <img src={getCardImage(method.card.brand)} alt="" />
            </div>

            <div >
              <p>
                {method.card.brand} **** {method.card.last4}
              </p>
              <p>{method.billing_details.name}</p>
            </div>

            <div >
              Expires{" "}
              {format(new Date(`${method.card.exp_year}/${method.card.exp_month}/01`), "MM/yyyy")}
            </div>
          </div>
        ))}
    </div>
  );
}
