const axios = require('axios');
// const apiURL = 'http://118.69.123.51:5000/fis/api';

export function loginRequire(username, password) {
  const url = 'http://118.69.123.51:5000/fis/api/login';
  const user1 = 'TaiNT58';
  const password1 = 'T@iNT1010';
  return fetch(url, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      //Authorization
    }),
    body: JSON.stringify({
      username: user1,
      password: password1,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return {resultCode: -1, message: 'No internet...' + error};
    });
}
