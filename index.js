const axios = require('axios')

function getApiData() {
  return axios.get('https://randomuser.me/api/')
}

(() => {
  const data = getApiData()
  console.log(data)
})()