import React, { useState, useEffect } from "react";
import { totalBalance } from "../helper/formHelper";

const Payment = () => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    totalBalance()
      .then((data) => setTotal(data.total))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="text-success h4 mt-5">
        <p>Total Balance to be received - {total} </p>
      </div>
    </div>
  );
};

export default Payment;
