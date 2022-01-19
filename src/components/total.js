import React, { useState } from "react";
import { updateform } from "../helper/formHelper";
import "../App.css";
import { isAuthenticated } from "../helper/auth";

const Total = ({ inv, setInv }) => {
  const [gst, setGst] = useState(0);
  const [msg, setMsg] = useState("");
  const [next, setNext] = useState(false);
  const [form, setForm] = useState({
    total: 0,
    grandtotal: 0,
  });
  const { user, token } = isAuthenticated();

  const onSubmit = (e) => {
    e.preventDefault();
    if (gst) {
      updateform(gst, inv, user, token).then((data) => {
        // console.log("data>>>>>>>", data);

        if (data.error) {
          // console.log("eroor in frt end", data.error);
          setMsg(data.error);
        } else {
          setForm({ ...form, total: data.total, grandtotal: data.grandtotal });
          setGst(0);
          setNext(true);
          setMsg("");
        }
      });
    } else setMsg("Enter the GST in %");
  };

  return (
    <div>
      <div className="text-center">
        <label className="">GST in %</label>
        <input
          className="mx-4 my_primary"
          type="number"
          value={gst}
          onChange={(e) => setGst(e.target.value)}
        />
        <button onClick={onSubmit} className="btn btn-info">
          Next
        </button>
        {next ? (
          <div className="my-4">
            <div className="d-flex mt-3 ">
              <button className="btn btn-success btn-lg">
                Total &nbsp; - &nbsp; {form.total}
              </button>
            </div>
            <div className="d-flex mt-3">
              <button className="btn btn-info btn-lg">
                Grand Total &nbsp; - &nbsp; {form.grandtotal}
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {msg}
    </div>
  );
};

export default Total;
