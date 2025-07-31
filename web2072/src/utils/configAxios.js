import axios from "axios";

const instance = axios.create({
  baseURL: `http://localhost:3000/`,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance;
// export có thể export nhiều 
// trong 1 file js chỉ có duy nhất 1 export default