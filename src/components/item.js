import React, { useState } from "react";
import Total from "./total";
import { createitem } from "../helper/formHelper";

const Item = ({ inv, setInv }) => {
  const [items, setItems] = useState([]);

  const [item, setItem] = useState({
    nature: "",
    Invoice: "",
    measurement: "",
    Particulars: "",
    freight: 0,
  });
  const [next, setNext] = useState(false);
  const { nature, Invoice, measurement, Particulars, freight } = item;

  const onHandle = (name) => (e) => {
    setItem({ ...item, [name]: e.target.value });
  };

  const [msg, setMsg] = useState("");
  const [itemrow, setItemrow] = useState(false);
  const onsubmit = (e) => {
    e.preventDefault();
    if (freight) {
      createitem(inv, item).then((data) => {
        if (data.error) {
          // setvalues({ ...values, error: data.error });
          console.log("eroor in frt end", data.error);
          setMsg(data.error);
        } else {
          setItems([...items, item]);
          setItemrow(true);
          console.log(items);
          setItem({
            ...item,
            nature: "",
            Invoice: "",
            measurement: "",
            Particulars: "",
            freight: 0,
          });
          setMsg("");
          setNext(true);
        }
      });
    } else {
      setMsg("Enter the freight");
    }
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex justify-content-center">
        <form onSubmit={onsubmit} className="d-flex flex-column ">
          <div className="d-md-flex flex-row text-left">
            <div className="mx-4 d-flex flex-column">
              <label className="text-left blockquote mt-4 ">Nature</label>
              <input
                className="p-2 my_primary "
                value={nature}
                type="text"
                onChange={onHandle("nature")}
                required
                placeholder="Nature"
              />
            </div>
            <div className="mx-4 d-flex flex-column">
              <label className="text-left blockquote mt-4 ">Invoice</label>
              <input
                className="p-2 my_primary"
                type="text"
                value={Invoice}
                onChange={onHandle("Invoice")}
                required
                placeholder="Invoice"
              />
            </div>
          </div>

          <div className="d-md-flex flex-row text-left">
            <div className="mx-4 d-flex flex-column">
              <label className="text-left blockquote mt-4">Measurement</label>
              <input
                className="p-2 my_primary"
                type="text"
                value={measurement}
                required
                onChange={onHandle("measurement")}
                placeholder="Measurement"
              />
            </div>
            <div className="mx-4 d-flex flex-column">
              <label className="text-left blockquote mt-4">Particulars</label>
              <input
                type="text"
                className="p-2 my_primary"
                value={Particulars}
                required
                onChange={onHandle("Particulars")}
                placeholder="Particulars"
              />
            </div>
          </div>

          <label className="text-left mx-4 blockquote mt-4">Freight</label>
          <input
            className="p-2 mx-4 my_primary"
            type="number"
            value={freight}
            onChange={onHandle("freight")}
            required
            placeholder="freight"
          />

          <div>
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
      <div className="h4">{msg}</div>
      <div className="w-50 text-center mt-3 table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Nature</th>
              <th scope="col">Invoice</th>
              <th scope="col">Measurement</th>
              <th scope="col">Particulars</th>
              <th scope="col">Freight</th>
            </tr>
          </thead>
          {items.map((it, i) => {
            return (
              <tbody key={i}>
                <tr>
                  <td>{it.nature}</td>
                  <td>{it.Invoice}</td>
                  <td>{it.measurement}</td>
                  <td>{it.Particulars}</td>
                  <td>{it.freight}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      {next ? <Total inv={inv} setInv={setInv} /> : ""}
    </div>
  );
};

export default Item;
