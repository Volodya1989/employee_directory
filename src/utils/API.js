import axios from "axios";
const URL = "https://randomuser.me/api/?results=150&inc=picture,name,phone,email,dob,login,us";

export default {
  getUsers: () => {
    return axios.get(URL);
  },
};
