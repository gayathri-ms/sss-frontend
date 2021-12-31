import { API } from "../backend";

export const createForm = (form) => {
  console.log(`LINE NUMBER 4`);
  return fetch(`${API}/form/createform/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const createCompany = (company) => {
  console.log(`LINE NUMBER 4`);
  return fetch(`${API}/add`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(company),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const companynames = () => {
  return fetch(`${API}/allcompany`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const createitem = (inv, item) => {
  console.log(`LINE NUMBER 4`);
  return fetch(`${API}/item/createitem/${inv}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const updateform = (gst, inv) => {
  return fetch(`${API}/form/updategst/${inv}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ gst: gst }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getByDate = (date) => {
  return fetch(`${API}/form/getform123/${date}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getByCompany = (company) => {
  return fetch(`${API}/form/getform/${company}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const dues = () => {
  return fetch(`${API}/form/getnotified`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const totalBalance = () => {
  return fetch(`${API}/form/total`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const payment = () => {
  return fetch(`${API}/form/payment`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updatebalance = (amt, inv) => {
  return fetch(`${API}/form/updatebalance/${inv}/${amt}`, {
    method: "PUT",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getinvoice = (id) => {
  return fetch(`${API}/form/getinvoice/${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
