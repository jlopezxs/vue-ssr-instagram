import request from 'axios'

request.defaults.baseURL = 'http://jsonplaceholder.typicode.com/'

export const getUserItems = ({ commit, state }) => {
  return request.get('posts').then((response) => {
    if (response.statusText === 'OK') {
      commit('ITEMS_LIST', response.data)
    }
  }).catch((error) => {
    console.log(error)
  })
}
