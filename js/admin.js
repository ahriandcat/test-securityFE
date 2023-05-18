import { handleErrors } from './handleErrors.js';
document.addEventListener('DOMContentLoaded', function() {
    const userList = document.getElementById('userList');
    const token = localStorage.getItem('accessToken');
    const apiUrl = 'http://localhost:8082/api/v1/admin/getUsers';
  
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        console.log(response)
        const users = response.data;
        users.forEach(user => {
          const listItem = document.createElement('li');
          listItem.textContent = user.name;
          userList.appendChild(listItem);
        });
      })
      .catch(error => {
        handleErrors(error);
      });
  });
  