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
