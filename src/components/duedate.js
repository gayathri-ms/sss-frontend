import React, { useState, useEffect } from "react";
import { dues } from "../helper/formHelper";

const Duedate = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    dues()
      .then((data) => setDetails(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex flex-column mt-5 justify-content-center align-item-center">
      {details.length !== 0 ? (
        <div>
          <p className="h3">Due Dates</p>
        </div>
      ) : (
        ""
      )}

      <div className="d-flex justify-content-center">
        {details.length != 0 ? (
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
                  <th scope="col">Balance Amount</th>
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
                      <td>{it.balance}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        ) : (
          <div>
            <p className="h3 text-success">No Dues left</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Duedate;
