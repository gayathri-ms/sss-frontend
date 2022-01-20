import React, { useState } from "react";
import { isAuthenticated } from "../helper/auth";
import { getinvoice, getitem } from "../helper/formHelper";

const Print = () => {
  const [inv, setInv] = useState(0);
  const { user, token } = isAuthenticated();
  const [msg, setMsg] = useState("");
  const [invdet, setInvdet] = useState({
    invoice: 0,
    vehicle_no: "-",
    date: "-",
    due_date: "-",
    consignor: "-",
    from: "-",
    consignee: "-",
    to: "-",
    gst_com: "-",
    total: 0,
    balance: 0,
    grandtotal: 0,
    gst: 0,
    amt_received: 0,
  });
  const [next, setNext] = useState(false);
  const [items, setItems] = useState([]);

  const onSubmit = () => {
    getinvoice(inv, user, token)
      .then((data) => {
        if (data.length === 0) {
          setNext(false);
          setMsg("Invoice not found");
        } else {
          setInvdet({
            invoice: data[0].invoice,
            vehicle_no: data[0].vehicle_no,
            date: data[0].dateformat,
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
          setNext(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    getitem(inv, user, token)
      .then((data) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {next ? (
        <div className="h-100 lh-1 w-100">
          <div className="container text-center border p-2">
            <div className="row">
              <div className="col text-start">
                <b>Invoice No:</b> {invdet.invoice}{" "}
              </div>
              <div className="col text-start">
                <b> Date: </b>
                {invdet.date}
              </div>
              <div className="col text-start">
                <b>Vehicle No:</b>{" "}
                <span className="text-uppercase">{invdet.vehicle_no}</span>
              </div>
            </div>
          </div>
          <div className="container text-center p-2">
            <div className="row">
              <div className="col text-capitalize text-start">
                <b> Consignor:</b> {invdet.consignor}
              </div>
              <div className="col text-capitalize text-start">
                <b>Consignee:</b> {invdet.consignee}
              </div>
            </div>
          </div>
          <div className="container text-center p-2">
            <div className="row">
              <div className="col text-capitalize text-start">
                <b>From Place:</b> {invdet.from}
              </div>
              <div className="col text-capitalize text-start">
                <b>To Place:</b> {invdet.to}
              </div>
            </div>
          </div>
          <div className="container text-center border p-2">
            <div className="row">
              <div className="col text-uppercase text-start">
                <b>Party GSTIN No:</b> {invdet.gst_com}
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="w-100 text-center table-responsive">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Nature of Goods</th>
                    <th scope="col">Party Dc/Invoice No</th>
                    <th scope="col">Measurement</th>
                    <th scope="col">Particulars</th>
                    <th scope="col">Freight</th>
                  </tr>
                </thead>
                {items.map((item, i) => {
                  return (
                    <tbody key={i}>
                      <tr>
                        <td>{item.nature}</td>
                        <td>{item.Invoice}</td>
                        <td>{item.measurement},</td>
                        <td>{item.Particulars}</td>
                        <td>{item.freight}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
          <div className="container text-end p-2">
            <div className="row">
              <div className="col text-end">
                <b>Total :</b> {invdet.total}
              </div>
            </div>
          </div>
          <div className="container text-end p-2">
            <div className="row">
              <div className="col text-end">
                <b>GST :</b> {invdet.gst}%
              </div>
            </div>
          </div>
          <div className="container text-end p-2">
            <div className="row">
              <div className="col text-end">
                <b>Grand Total :</b> {invdet.grandtotal}
              </div>
            </div>
          </div>
          <div className="container mt-2 w-100 text-end border p-2">
            <div className="row">
              <div className="col text-start">
                <div className="col">
                  Delivery at Loading Date : <br />
                  <br />
                  &nbsp;
                </div>
                <div className="col text-start mt-3">
                  Subject to Tirupur Jurisdiction
                </div>
              </div>
              <div className="col text-end">
                <b>For SHREE SABARI SASHTHA TRANSPORT</b>
              </div>
              <div className="text-end">Authorised Signatory</div>
            </div>
          </div>
          <div className="text-center mt-5">
            <button className="btn" onClick={() => window.print()}>
              Print
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="mt-5 mb-3">
            <label className=" h5">Invoice No</label>
            <input
              className="mx-3 my_primary p-2 h6"
              type="number"
              onChange={(e) => setInv(e.target.value)}
            />
            <button
              className="btn mx-3 h4 bg-info text-white p-2"
              onClick={onSubmit}
            >
              Check
            </button>
            <p className="h5 mt-5">{msg}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Print;
