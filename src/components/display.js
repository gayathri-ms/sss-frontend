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
    <div className="d-flex flex-column justify-content-center text-center align-item-center">
      <div className="mt-5 mb-3">
        <label className=" h5">Date</label>
        <input
          className="mx-3 my_primary p-2 h6"
          type="date"
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          className="btn mx-3 h4 bg-info text-white p-2"
          onClick={onSubmit}
        >
          Check
        </button>
      </div>
      <div className="d-flex justify-content-center">
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
    </div>
  );
};

export default Displaydate;
