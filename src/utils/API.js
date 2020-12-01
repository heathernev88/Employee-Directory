import axios from 'axios'

// module that contains function to get data from the API
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUsers: function() {
    return axios.get('https://randomuser.me/api/?results=50&nat=us')
  },
};