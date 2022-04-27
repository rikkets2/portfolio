console.log("start");
const API = "http://localhost:3000/api";

const sendRequest = (path, method = "GET", body = {}) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.timeout = 10000;
    xhr.ontimeout = () => {
      console.log("timeout!");
    };
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          console.log("Error!", xhr.responseText);
          reject(xhr.responseText);
        }
      }
    };
    xhr.open(method, `${API}/${path}`);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(JSON.stringify(body));
  });
};
