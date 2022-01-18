import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import { getpdf, printpdf } from "../helper/formHelper";

const Pdf = () => {
  const [inv, setInv] = useState(0);

  // const onSubmit = () => {
  //   printpdf(inv).then((data) => {
  //     console.log("inside printpdf");
  //     getpdf().then((res) => {
  //       console.log("res", res);
  //       const pdf = new Blob([res.data], { type: "application/pdf" });
  //       saveAs(pdf, "invoice.pdf");
  //     });
  //   });
  // };

  return (
    <div className="text-center mt-5 mb-3">
      {/* <label className="h5">Invoice No :</label>
      <input
        className="mx-3 my_primary p-2 h6"
        type="number"
        placeholder="Invoice no"
        onChange={(e) => setInv(e.target.value)}
      />
      <button className="btn mx-3 h4 bg-info text-white p-2" onClick={onSubmit}>
        Download Pdf
      </button> */}
    </div>
  );
};

export default Pdf;
