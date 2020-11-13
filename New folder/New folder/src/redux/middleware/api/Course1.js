export function getCourse1(token) {
    const url = 'http://10.86.224.37:5001/api/edu/get_all_course';
    const token1 =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkY2I4MzBhOWM2YzYwMTI4NGUwNzNhZCIsImlhdCI6MTU3NjExODk4OH0.awSXj6_z6kxKgJDTjRlv66xJC82VBZuehkBkGCGGaeI';
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