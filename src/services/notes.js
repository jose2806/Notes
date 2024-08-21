import axios from "axios"
const baseUrl = "/api/notes"
let token = null

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
};

const getAll = () => {
  const request = axios.get(baseUrl).then((response) => response.data)
  return request
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
};

const update = (id, newObject) => {
  const request = axios
    .put(`${baseUrl}/${id}`, newObject)
    .then((response) => response.data)
  return request
};

export default { getAll, create, update, setToken }
