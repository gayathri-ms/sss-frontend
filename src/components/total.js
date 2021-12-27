import React, { useState } from "react";

const Total = () => {
  const [gst, setGst] = useState(0);
  const [msg, setMsg] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (gst) {
      setGst(0);
      setMsg("");
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
        <button onClick={onSubmit} className="btn btn-info">
          Next
        </button>
      </div>
      {msg}
    </div>
  );
};

export default Total;
