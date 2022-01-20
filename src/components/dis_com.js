import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../helper/auth";
import { companynames, getByCompany } from "../helper/formHelper";

const Displaycomp = () => {
  const [companies, setCompanies] = useState([]);
  const [comp, setComp] = useState("");
  const [details, setDetails] = useState([]);
  const { user, token } = isAuthenticated();

  useEffect(() => {
    companynames(user, token)
      .then((data) => {
        setCompanies(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmit = () => {
    // console.log(comp);
    getByCompany(comp, user, token)
      .then((data) => setDetails(data))
      .catch((err) => console.log("errr", err));
  };

  return (
    <div className="d-flex flex-column justify-content-center align-item-center">
      <div className="mx-4 d-flex justify-content-center align-item-center mt-5 mb-3">
        {/* <label className="text-left blockquote mt-4 ">Consignor</label> */}
        <div className="dropdown">
          <select
            onChange={(e) => setComp(e.target.value)}
            className="form-control mx-3 p-2 my_primary"
            placeholder="Company"
          >
            <option>Select</option>
            {companies.map((data, i) => {
              return <option key={i}>{data.company_name}</option>;
            })}
          </select>
        </div>
        <button
          className="btn mx-5 h4 bg-info text-white p-2"
          onClick={onSubmit}
        >
          Check
        </button>
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
              </tr>
            </thead>
            {details.map((it, i) => {
              return (
                <tbody key={i}>
                  <tr>
                    <td>{it.invoice}</td>
                    <td>{it.dateformat}</td>
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
      </div>
      {details.length === 0 ? (
        <p className="text-center mx-5 my-3 h3">No Data Found</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Displaycomp;
