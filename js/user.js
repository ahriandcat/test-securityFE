import { handleErrors } from './handleErrors.js';
document.addEventListener('DOMContentLoaded', getUserInfo);

function getUserInfo() {
  // Lấy token từ localStorage
  const token = localStorage.getItem('accessToken');

  // Tạo headers với token
  const headers = {
    'Authorization': `Bearer ${token}`
  };

  // Gửi yêu cầu API với headers
  axios.get('http://localhost:8082/api/v1/user/detail', { headers })
    .then(response => {
      console.log('===================')
      console.log(response);
      document.getElementById('body').style.display = 'block';
      const userInfo = response.data;
      document.getElementById('email').textContent = userInfo.email;
      document.getElementById('firstname').textContent = userInfo.firstname;
      document.getElementById('lastname').textContent = userInfo.lastname;
    })
    .catch(error => {
      handleErrors(error);
    });
}
