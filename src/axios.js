import axios from "axios";
import {persistor} from "./index"

const instance = axios.create({
    baseURL: 'http://qa.ride-int.com:8000/api/admin/',
    timeout: 1000,
    headers: {
      'Accept': 'application/json'
    }
  });


  export default instance