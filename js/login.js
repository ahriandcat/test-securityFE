import { handleErrors } from './handleErrors.js';
document.addEventListener('DOMContentLoaded', function() {
  const loginButton = document.getElementById('loginButton');
  loginButton.addEventListener('click', function(event) {
    event.preventDefault();

    const email = document.getElementById('typeEmailX-2').value;
    const password = document.getElementById('typePasswordX-2').value;

    const apiUrl = 'http://localhost:8082/api/v1/auth/authenticate';

    axios
      .post(apiUrl, {
        email: email,
        password: password
      })
      .then(response => {
        const data = response.data;
        localStorage.setItem('accessToken', data.access_token);
        console.log('Đăng nhập thành công');
        window.location.href = 'index.html'; // Chuyển hướng sau khi đăng nhập thành công
      })
      .catch(error => {
        handleErrors(error);
      });
  });
});
