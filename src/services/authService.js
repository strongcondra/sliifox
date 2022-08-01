import axios from "axios";

const API_URL = "http://localhost:3001/users/";
const userLogin = (email, password) => {
  return axios.post(API_URL+'userLogin', {
    email:email,
    password:password,
  });

};

const userRegister = (email, password,firstName,lastName) => {
    return axios.post(API_URL+'userRegister', {
      email:email,
      password:password,
      firstName:firstName,
      lastName:lastName
    });
  
  };
const AuthService = {
  userLogin,
  userRegister
}
export default AuthService;