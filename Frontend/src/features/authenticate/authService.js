import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/users';

const registerUser = async (userData) => {
  const response = await axios.post(`${baseUrl}/register-user`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const loginUser = async (userData) => {
  const response = await axios.post(`${baseUrl}/login-user`, userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
}

const logoutUser = () => {
  localStorage.removeItem('user');
}



export const authService = {
  registerUser,
  loginUser,
  logoutUser,
}