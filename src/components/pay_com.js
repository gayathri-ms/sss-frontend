import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../helper/auth";
import { payment } from "../helper/formHelper";
import Payment from "./payment";

const Pay_com = () => {
  const [items, setItems] = useState([]);
  const { user, token } = isAuthenticated();

  useEffect(() => {
    payment(user, token)
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="text-center">
      <Payment />
      <div className="d-flex justify-content-center">
        <div className="w-50 text-center mt-3 table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Company Name</th>
                <th scope="col">Balance</th>
              </tr>
            </thead>
            {items.map((it, i) => {
              return (
                <tbody key={i}>
                  <tr>
                    <td>{it._id.consignor}</td>
                    <td>{it.balance}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pay_com;
