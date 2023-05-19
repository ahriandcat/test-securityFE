// Hàm xử lý lỗi chung
export function handleErrors(error) {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          console.error('Lỗi 400 - Bad Request:', error);
          // Xử lý lỗi 400
          break;
        case 401:
          console.error('Lỗi 401 - Unauthorized:', error);
          // Xử lý lỗi 401
          break;
        case 403:
          console.log('Lỗi 403 - Forbidden');
          window.location.href = '../exception/403.html'; // Chuyển hướng đến trang 403.html
          break;
        case 404:
          console.error('Lỗi 404 - Not Found:', error);
          // Xử lý lỗi 404
          break;
          case 500:
            console.error('Lỗi 500 - Internal Server Error:', error);
            // Xử lý lỗi 500
            break;
        default:
          console.error('Lỗi không xác định:', error);
          // Xử lý lỗi không xác định
          break;
      }
    } else {
      console.error('Đăng nhập thất bại:', error);
    }
  }
  
  