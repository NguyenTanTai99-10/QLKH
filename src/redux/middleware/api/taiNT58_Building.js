export function buildingAction(token) {
  const url = 'http://10.86.224.37:5001/api/edu/get_building';
  const token1 =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYThlYWU3ZTY1OTVhM2JkM2JiOTFmMiIsImlhdCI6MTYwNTU4NDkwN30.x-YGgKwFlutCmBs6Fk5Z1jN4Tff53jtNMpVXiMG6Lrs';
  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token1,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return 'No internet...' + error;
    });
  // const axios = require('axios');
  // const apiURL = "http://10.86.224.37:5001/api/";
  // export function buildingAction(token) {
  //     var config = {
  //         method: 'get',
  //         url: apiURL + 'edu/get_building',
  //         headers: {
  //             'Content-Type': 'application/x-www-form-urlencoded',
  //             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYThlYWU3ZTY1OTVhM2JkM2JiOTFmMiIsImlhdCI6MTYwNTU3OTc0N30.OsEsSJxMiPuDongMEy68r4qON-THKiUHMeAgzkNp_1U',
  //         },
  //     };

  //     return axios(config)
  //         .then(function (response) {
  //             return response
  //         })
  //         .catch(function (error) {
  //             console.log('error');
  //             console.log(error);
  //         })
}
