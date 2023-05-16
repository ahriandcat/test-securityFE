document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      axios.post('http://localhost:8082/api/v1/auth/authenticate', {
        email: email,
        password: password
      })
        .then(response => {
            console.log("========================")
            console.log(response)
          const data = response.data;
          localStorage.setItem('accessToken', data.access_token);
          localStorage.setItem('refreshToken', data.refresh_token);
          console.log('Đăng nhập thành công');
          window.location.href = 'index.html';
        })
        .catch(error => {
          console.error('Đăng nhập thất bại:', error);
        });
    });
  });