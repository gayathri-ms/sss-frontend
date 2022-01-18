import { API } from "../backend";

//const { user, token } = isAuthenticated();

export const createForm = (form, user, token) => {
  console.log(`LINE NUMBER 4`);
  return fetch(`${API}/form/createform/${user._id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(form),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const createCompany = (company, user, token) => {
  console.log(`LINE NUMBER 4`);
  return fetch(`${API}/add/${user._id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(company),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const companynames = (user, token) => {
  return fetch(`${API}/allcompany/${user._id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const createitem = (inv, item, user, token) => {
  console.log(`LINE NUMBER 4`);
  return fetch(`${API}/item/createitem/${inv}/${user._id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(item),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const updateform = (gst, inv, user, token) => {
  return fetch(`${API}/form/updategst/${inv}/${user._id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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

export const getByDate = (date, user, token) => {
  return fetch(`${API}/form/getform123/${date}/${user._id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getByCompany = (company, user, token) => {
  return fetch(`${API}/form/getform/${company}/${user._id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const dues = (user, token) => {
  return fetch(`${API}/form/getnotified/${user._id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const totalBalance = (user, token) => {
  return fetch(`${API}/form/total/${user._id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const payment = (user, token) => {
  return fetch(`${API}/form/payment/${user._id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updatebalance = (amt, inv, user, token) => {
  return fetch(`${API}/form/updatebalance/${inv}/${amt}/${user._id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getinvoice = (id, user, token) => {
  return fetch(`${API}/form/getinvoice/${id}/${user._id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getitem = (id, user, token) => {
  return fetch(`${API}/item/getitem/${id}/${user._id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// export const printpdf = (inv) => {
//   console.log(`LINE NUMBER 4`);
//   return fetch(`${API}/printpdf`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ inv: inv }),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((error) => console.log(error));
// };

// export const getpdf = () => {
//   return fetch(`${API}/getpdf`, {
//     method: "GET",
//     // response: "Blob",
//     headers: {
//       Accept: "application/pdf",
//       "Content-Type": "application/pdf",
//     },
//   })
//     .then((response) => {
//       return response.blob();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
