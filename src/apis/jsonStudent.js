import axios from "axios";

export default axios.create({
  baseURL: "https://ptc-test-participants.herokuapp.com/api"
});
