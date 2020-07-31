import axios from "axios";
const URL = "https://randomuser.me/api/?results=100&inc=picture,name,phone,email,dob,login";

export default {
  getUsers: () => {
    return axios.get(URL);
  },
};