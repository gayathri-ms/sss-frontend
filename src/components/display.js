import React, { useState, useEffect } from "react";
import { getByDate } from "../helper/formHelper";

const Displaydate = () => {
  const [date, setDate] = useState("");
  const [details, setDetails] = useState([]);

  const onSubmit = () => {
    getByDate(date)
      .then((data) => setDetails(data))
      .catch((err) => console.log("errr", err));
  };

  return (
    <div className="d-flex flex-column justify-content-center align-item-center">
      <div>
        <label>Date</label>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <button onClick={onSubmit}>Check</button>
        <p>{date}</p>
      </div>

      <div className="w-50 text-center mt-3 table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Invoice</th>
              <th scope="col">Vehicle No</th>
              <th scope="col">Consignor</th>
              <th scope="col">Consignee</th>
              <th scope="col">Address</th>
              <th scope="col">Total(+GST)</th>
            </tr>
          </thead>
          {details.map((it, i) => {
            return (
              <tbody key={i}>
                <tr>
                  <td>{it.invoice}</td>
                  <td>{it.vehicle_no}</td>
                  <td>{it.consignor}</td>
                  <td>{it.consignee}</td>
                  <td>{it.to}</td>
                  <td>{it.grandtotal}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Displaydate;
