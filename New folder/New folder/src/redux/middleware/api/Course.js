export function getCourse(token) {
    const url = 'http://10.86.224.37:5001/api/edu/get_all_course';
    const token1 =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYThlYWU3ZTY1OTVhM2JkM2JiOTFmMiIsImlhdCI6MTYwNTE1MTYyMH0.ScQqFAIWrkEFvCAzYHw53zpdXiTcAHsePsVSlXApA-4';
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
        return {resultCode: -1, message: 'No internet...' + error};
      });
  }