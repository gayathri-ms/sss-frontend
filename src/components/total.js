import React, { useState } from "react";
import { updateform } from "../helper/formHelper";

const Total = ({ inv, setInv }) => {
  const [gst, setGst] = useState(0);
  const [msg, setMsg] = useState("");
  const [next, setNext] = useState(false);
  const [form, setForm] = useState({
    // _id: "",
    // invoice: 0,
    // vehicle_no: " ",
    // date: "",
    // consignor: "",
    // from: "",
    // consignee: "",
    // to: "",
    // gst_com: "",
    total: 0,
    // __v: 0,
    grandtotal: 0,
    // gst: 0
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (gst) {
      updateform(gst, inv).then((data) => {
        console.log("data>>>>>>>", data);

        // if (data.error) {
        //   console.log("eroor in frt end", data.error);
        //   setMsg(data.error);
        // } else {
        // setForm({ ...form, total: data.total, grandtotal: data.grandtotal });
        setGst(0);
        setNext(true);
        setMsg("");
        // }
      });
    } else setMsg("Enter the GST in %");
  };

  return (
    <div>
      <div className="">
        <label>GST in %</label>
        <input
          className="mx-4 my_primary"
          type="number"
          value={gst}
          onChange={(e) => setGst(e.target.value)}
        />
        {/* {next ? (
          <div>
            <div>
              <label>Total</label>
              <p>{form.total} </p>
            </div>
            <div>
              <label>Grand Total</label>
              <p>{form.grandtotal} </p>
            </div>
          </div>
        ) : ( */}
        <button onClick={onSubmit} className="btn btn-info">
          Next
        </button>
        {/* )} */}
      </div>
      {msg}
    </div>
  );
};

export default Total;
