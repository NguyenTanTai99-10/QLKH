export function addCourse(token, obj) {
  const url = 'http://118.69.123.51:5000/fis/api/edu/create_new_course';
  const token1 =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYThlYWU3ZTY1OTVhM2JkM2JiOTFmMiIsImlhdCI6MTYwNTI1NTA0NX0.1waY88pHIhZKYvgPVJZc3ezwkY9iIJTDLS8fiQA5P9c';
  return fetch(url, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token1,
    }),
    body: JSON.stringify(obj),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return {resultCode: -1, message: 'No internet...' + error};
    });
}
