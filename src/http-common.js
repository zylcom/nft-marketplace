import Axios from "axios";

export default Axios.create({
  baseURL: "https://622de97e8d943bae3489d976.mockapi.io/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
