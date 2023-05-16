// Lấy access token từ localStorage
const accessToken = localStorage.getItem("accessToken");

// Gửi yêu cầu GET đến API và gắn access token vào header Authorization
axios
  .get("http://localhost:8082/api/v1/demo/getUsers", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  .then((response) => {
    const data = response.data;
    // Xử lý danh sách người dùng trả về
    console.log(response)
    const userList = document.getElementById("userList");
    data.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error("Lỗi khi lấy danh sách người dùng:", error);
  });
