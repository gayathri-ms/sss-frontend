import React, { useState } from "react";
import { createCompany } from "../helper/formHelper";

const Company = () => {
  const [company, setCompany] = useState({
    company_name: "",
    address: "",
    GST: "",
  });
  const [msg, setMsg] = useState("");
  const { company_name, address, GST } = company;
  const onHandle = (name) => (e) => {
    setCompany({ ...company, [name]: e.target.value });
  };
  const onsubmit = (e) => {
    e.preventDefault();
    console.log("submittes", company);
    createCompany(company).then((data) => {
      if (data.error) {
        setMsg(data.error);
      } else {
        console.log(company);
        setCompany({
          company_name: "",
          address: "",
          GST: "",
        });
        setMsg("Added Successfully");
      }
    });
  };

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-center">
        <form onSubmit={onsubmit} className="d-flex flex-column ">
          <div className="d-md-flex flex-row text-left">
            <div className="mx-4 d-flex flex-column ">
              <label className="text-left blockquote mt-4 ">Company Name</label>
              <input
                className="p-2 my_primary "
                value={company_name}
                type="text"
                onChange={onHandle("company_name")}
                required
                placeholder="company_name"
              />
            </div>
            <div className="mx-4 d-flex flex-column">
              <label className="text-left blockquote mt-4 ">Address</label>
              <input
                className="p-2 my_primary"
                type="text"
                value={address}
                onChange={onHandle("address")}
                required
                placeholder="Address"
              />
            </div>
          </div>

          <div className="d-md-flex flex-row text-left">
            <div className="mx-4 d-flex flex-column">
              <label className="text-left blockquote mt-4">GSTin number</label>
              <input
                className="p-2 my_primary"
                type="text"
                value={GST}
                required
                onChange={onHandle("GST")}
                placeholder="GST"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-outline-danger mt-3 btn-lg"
              value="Next"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <p className="h3 mt-4 text-success">{msg}</p>
    </div>
  );
};

export default Company;
