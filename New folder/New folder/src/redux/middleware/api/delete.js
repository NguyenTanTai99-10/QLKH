export function getDelete(token, id) {
    console.log('id')
    console.log(id);
  const url = 'http://10.86.224.37:5001/api/edu/delete_course?courseId=' + id;
  const token1 =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYThlYWU3ZTY1OTVhM2JkM2JiOTFmMiIsImlhdCI6MTYwNTE2OTExMn0.qsr5YJk_XlXzoHZ1joRu3t_dqPrxeUL_eSlTA_cCStc';
  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token1,
    },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return {resultCode: -1, message: 'No internet...' + error};
    });
}
