document.addEventListener('DOMContentLoaded', function() {
  const adminButton = document.getElementById('admin');
  adminButton.addEventListener('click', function() {
    window.location.href = 'admin.html'; // Chuyển hướng sang trang admin.html
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const userButton = document.getElementById('user');
  userButton.addEventListener('click', function() {
    window.location.href = 'user.html'; // Chuyển hướng sang trang user.html
  });
});