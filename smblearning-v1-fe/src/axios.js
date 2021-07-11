import axios from "axios";

/*Base URL Makes request to the Server API*/
const instance = axios.create({
  // baseURL: "http://localhost:5001/smartbukites-lms/us-central1/api",
  baseURL: "https://us-central1-smartbukites-lms.cloudfunctions.net/api",
});

export default instance;
