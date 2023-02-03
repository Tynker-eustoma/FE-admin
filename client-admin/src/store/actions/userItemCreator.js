
import { LOGIN } from "./actionType"
const url = "https://p3-challenge1.melissa-portofolio.site"
// const url = "http://localhost:3000"

export const loginUser = (itemForm) => {
  return fetch(url + '/users/login', {
      method: 'POST',
      body: JSON.stringify(itemForm),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        localStorage.access_token = data.access_token
        localStorage.username = data.username
      })

}

export const registerUser = (itemForm) => {
  return fetch(url + '/users/register', {
      method: 'POST',
      body: JSON.stringify(itemForm),
      headers: {
        'Content-Type': 'application/json',
        access_token: localStorage.access_token
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      })
}