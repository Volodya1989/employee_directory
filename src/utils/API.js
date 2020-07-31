import axios from "axios";
const URL = "https://randomuser.me/api/?results=75&inc=picture,name,phone,email,dob,login,us";

export default {
  getUsers: () => {
    return axios.get(URL);
  },
};
