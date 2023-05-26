document.addEventListener('DOMContentLoaded', function() {
  const loginButton = document.getElementById('loginButton');
  loginButton.addEventListener('click', function(event) {
    event.preventDefault();

    const email = document.getElementById('typeEmailX-2').value;
    const password = document.getElementById('typePasswordX-2').value;

    // const apiUrl = 'http://192.168.0.222:8286/api/login';
    const apiUrl = 'http://localhost:8082/api/v1/auth/authenticate';

    axios
      .post(apiUrl, {
        email: email,
        password: password
      })
      .then(response => {
        console.log(response)
        const data = response.data;
        localStorage.setItem('accessToken', data.access_token);
        console.log('Đăng nhập thành công');
        window.location.href = 'index.html'; // Chuyển hướng sau khi đăng nhập thành công
      })
      .catch(error => {
        // handleErrors(error);
        var error = document.getElementById("error")
        error.innerHTML = "<span style='color: red;'>"+
                        "Email hoặc mật khẩu không chính xác</span>"
      });
  });
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('form-control')) {
    handleFormControlClick(event.target);
  }
});

const handleFormControlClick = (element) => {
  var error = document.getElementById("error")
  error.innerHTML = ''
};

window.onload = () => {
  const container = document.querySelector('.container');
  container.click();
  const typeEmail = document.querySelector('#typeEmailX-2');
  typeEmail.classList.add('active');
}


const googleLoginButton = document.getElementById('google');
googleLoginButton.addEventListener('click', function(event) {
  event.preventDefault();
  handleGoogleLogin();
});
const handleGoogleLogin = () => {
  window.location.href = 'http://localhost:8082/oauth2/authorization/google';
};

// Xử lý callback sau khi đăng nhập thành công
if (window.location.pathname === '/login/oauth2/code/google') {
  axios
    .get('http://localhost:8082/api/v1/auth/oauth2')
    .then(response => {
      const refreshToken = response.data;
      console.log(refreshToken);
      // Tiếp tục xử lý thông tin người dùng
    })
    .catch(error => {
      console.error(error);
    });
}



