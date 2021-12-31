import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./header";
import { createForm, companynames } from "../helper/formHelper";
import { Link } from "react-router-dom";
import Item from "./item";

const Form123 = ({ inv, setInv }) => {
  const [form, setForm] = useState({
    invoice: 0,
    vehicle_no: "",
    consignor: "",
    from: "",
    to: "",
    consignee: "",
    gst_com: "",
  });

  const [msg, setMsg] = useState("");
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    companynames()
      .then((data) => {
        setCompanies(data);
      })
      .catch((err) => {
        setMsg(err);
      });
  }, []);

  const [next, setNext] = useState(false);
  const { invoice, vehicle_no, consignor, from, to, consignee, gst_com } = form;

  const onHandle = (name) => (e) => {
    e.preventDefault();
    setForm({ ...form, [name]: e.target.value });
  };
  const onHandleChange = (e) => {
    const comp = e.target.value;
    const data = companies.filter((com) => com.company_name === comp);
    console.log(data);
    setForm({
      ...form,
      consignor: data[0].company_name,
      from: data[0].address,
      gst_com: data[0].GST,
    });

    console.log("form>>>>>", form);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    if (invoice && vehicle_no) {
      console.log(form);

      createForm(form).then((data) => {
        if (data.error) {
          // setvalues({ ...values, error: data.error });
          console.log("eroor in frt end", data.error);
          setMsg(data.error);
        } else {
          setInv(form.invoice);
          setForm({
            invoice: 0,
            vehicle_no: "",
            consignor: "",
            from: "",
            to: "",
            consignee: "",
            gst_com: "",
          });
          setMsg("");
          setNext(true);
        }
      });
    } else {
      if (!invoice) setMsg("Enter the Invoice No");
      if (!vehicle_no) setMsg("Enter the vehicle no");
    }
  };

  return (
    <div className=" mx-2 d-flex flex-column  bd-highlight h-auto">
      <hr className="w-100 border border-1" />
      <div className="d-md-flex mt-2 w-100 flex-row justify-content-center">
        <div className="mt-2">
          <label className="h6 mx-2">Invoice No:</label>
          <input
            type="number"
            value={invoice}
            onChange={onHandle("invoice")}
            className="w-25 my_primary ml-2"
          />
        </div>
        <div className="mt-2">
          <label className="h6 mx-2">Vehicle No:</label>
          <input
            type="text"
            value={vehicle_no}
            onChange={onHandle("vehicle_no")}
            className="w-50 my_primary ml-2"
          />
        </div>
      </div>
      <hr className="w-100 border border-1" />
      <div className="d-flex justify-content-center">
        <form onSubmit={onsubmit} className="d-flex flex-column ">
          <div className="d-md-flex flex-row text-left">
            <div className="mx-4 d-flex flex-column">
              <label className="text-left h5 mt-4 ">Consignor</label>
              <div className="dropdown">
                <select
                  onChange={onHandleChange}
                  className="form-control my_primary"
                  placeholder="Company"
                >
                  <option>Select</option>
                  {companies.map((data, i) => {
                    return <option key={i}>{data.company_name}</option>;
                  })}
                </select>
              </div>
            </div>

            <div className="mx-4 d-flex flex-column">
              <label className="text-left h5 mt-4 ">Consignee</label>
              <input
                className="p-2 my_primary"
                type="text"
                value={consignee}
                onChange={onHandle("consignee")}
                required
                placeholder="Consignee"
              />
            </div>
          </div>

          <div className="d-md-flex flex-row text-left">
            <div className="mx-4 d-flex flex-column">
              <label className="text-left h5 mt-4">From Place</label>
              <input
                className="p-2 my_primary my_cursor"
                disabled
                // value={from}
                // onChange={onHandleChange("from")}
                placeholder={form.from}
              />
            </div>
            <div className="mx-4 d-flex flex-column">
              <label className="text-left h5 mt-4">To Place</label>
              <input
                className="p-2 my_primary"
                value={to}
                required
                onChange={onHandle("to")}
                placeholder="To Address"
              />
            </div>
          </div>

          <label className="text-left mx-4 h5 mt-4">Party GSTIN No</label>
          <input
            className="p-2 mx-4 my_primary my_cursor"
            type="text"
            disabled
            // value={gst_com}
            // onChange={onHandleChange("gst_com")}
            placeholder={form.gst_com}
          />

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-outline-danger mt-3 btn-lg"
              value="Next"
            >
              Submit
            </button>
            {next ? (
              <button
                className="btn btn-outline-danger mx-4 mt-3 btn-lg"
                value="Next"
              >
                <Link to="/items">Next</Link>
              </button>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
      {/* <div>{JSON.stringify(companies)}</div> */}
      <div className="text-center">
        <p className="h4 mt-4">{msg} </p>
      </div>
      {/* <div>{next ? <Item /> : ""}</div> */}
    </div>
  );
};

export default Form123;
