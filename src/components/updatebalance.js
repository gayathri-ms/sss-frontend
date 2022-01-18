import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../helper/auth";
import { updatebalance, getinvoice } from "../helper/formHelper";

const Updatebalance = () => {
  const [updateamt, setUpdateamt] = useState(0);
  const [inv, setInv] = useState(0);
  const { user, token } = isAuthenticated();

  const [details, setDetails] = useState({
    invoice: 0,
    vehicle_no: "",
    date: "",
    due_date: "",
    consignor: "",
    from: "",
    consignee: "",
    to: "",
    gst_com: "",
    total: 0,
    balance: 0,
    grandtotal: 0,
    gst: 0,
    amt_received: 0,
  });
  const [msg, setMsg] = useState(false);

  const onCheck = (e) => {
    getinvoice(inv, user, token)
      .then((data) => {
        // console.log("dat");
        if (data.length === 0) setMsg(false);
        else {
          setDetails({
            invoice: data[0].invoice,
            vehicle_no: data[0].vehicle_no,
            date: data[0].date,
            due_date: data[0].due_date,
            consignor: data[0].consignor,
            from: data[0].from,
            consignee: data[0].consignee,
            to: data[0].to,
            gst_com: data[0].gst_com,
            total: data[0].total,
            balance: data[0].balance,
            grandtotal: data[0].grandtotal,
            gst: data[0].gst,
            amt_received: data[0].amt_received,
          });
          setMsg(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onSubmit = (e) => {
    updatebalance(updateamt, inv, user, token)
      .then((data) => {
        setDetails({
          invoice: data.invoice,
          vehicle_no: data.vehicle_no,
          date: data.date,
          due_date: data.due_date,
          consignor: data.consignor,
          from: data.from,
          consignee: data.consignee,
          to: data.to,
          gst_com: data.gst_com,
          total: data.total,
          balance: data.balance,
          grandtotal: data.grandtotal,
          gst: data.gst,
          amt_received: data.amt_received,
        });
        setUpdateamt(0);
      })
      .catch((err) => {
        setMsg(true);
        console.log(err);
      });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-item-center">
      <div className="mx-4 d-flex justify-content-center align-item-center mt-5 mb-3">
        {!msg ? (
          <div>
            <label className=" h5">Invoive No</label>
            <input
              className="mx-3 my_primary p-2 h6"
              type="number"
              onChange={(e) => setInv(e.target.value)}
            />
            <button
              className="btn mx-5 h4 bg-info text-white p-2"
              onClick={onCheck}
            >
              Check
            </button>
          </div>
        ) : (
          <div>
            <div>
              <label className=" h5">Amount Received</label>
              <input
                className="mx-3 my_primary p-2 h6"
                type="number"
                value={updateamt}
                onChange={(e) => setUpdateamt(e.target.value)}
              />
            </div>
            <button
              className="btn mx-5 h4 bg-info text-white p-2"
              onClick={onSubmit}
            >
              Update
            </button>
          </div>
        )}
      </div>

      <div className="d-flex justify-content-center">
        <div className="w-50 ml-5 text-center mt-3 table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Invoice</th>
                <th scope="col">Date</th>
                <th scope="col">Vehicle No</th>
                <th scope="col">Consignor</th>
                <th scope="col">Consignee</th>
                <th scope="col">Address</th>
                <th scope="col">Total(+GST)</th>
                <th scope="col">Balance</th>
                <th scope="col">Amount Received</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{details.invoice}</td>
                <td>{details.date.slice(0, 10)}</td>
                <td>{details.vehicle_no}</td>
                <td>{details.consignor}</td>
                <td>{details.consignee}</td>
                <td>{details.to}</td>
                <td>{details.grandtotal}</td>
                <td>{details.balance}</td>
                <td>{details.amt_received}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {!msg ? <p className="text-center mx-5 my-3 h3">No Data Found</p> : ""}
    </div>
  );
};

export default Updatebalance;
