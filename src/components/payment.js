import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../helper/auth";
import { totalBalance } from "../helper/formHelper";

const Payment = () => {
  const [total, setTotal] = useState(0);
  const { user, token } = isAuthenticated();

  useEffect(() => {
    totalBalance(user, token)
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
