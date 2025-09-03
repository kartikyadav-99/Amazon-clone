import "./Subtotal.css";
import React from "react";
import CurrencyInput from "react-currency-input-field";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";

const Subtotal = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      {/* Display subtotal manually */}
      <p>
        Subtotal ({basket.length}):{" "}
        <strong>
          <CurrencyInput
            value={getBasketTotal(basket)}
            decimalsLimit={2}
            prefix="$"
            readOnly
          />
        </strong>
      </p>

      <small className="subtotal__gift">
        <input type="checkbox" /> 
        This order contains a gift
      </small>

      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;








