import axios from "axios";

export default (methodType, serverUrl, headersArray, data) => {
  return axios({
    method: methodType,
    url: `${serverUrl}`,
    headers: setHeaders(headersArray),
    data: data,
  })
    .then((response) => {
      return response;
    })
    .catch(() => { });
};

function setHeaders(headersArray) {
  let resultHeaders = {};
  if (headersArray) {
    let defaultHeaders = getDefaultHeaders();
    for (let i = 0; i < headersArray.length; i++) {
      const element = headersArray[i];
      if (defaultHeaders[element]) {
        resultHeaders[Object.keys(defaultHeaders[element])[0]] =
          defaultHeaders[element][Object.keys(defaultHeaders[element])[0]];
      }
    }
  }

  return resultHeaders;
}

function getDefaultHeaders() {
  return {
    jsonType: {
      "Content-Type": "application/json charset=UTF-8",
    },
  };
}
