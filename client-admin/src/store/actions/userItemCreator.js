
import { LOGIN } from "./actionType"
const url = "http://13.231.227.15:3000"
// const url = "http://localhost:3000"

export const loginUser = (itemForm) => {
  console.log("kepanggil item creatornya")
  return fetch(url + '/users/login', {
      method: 'POST',
      body: JSON.stringify(itemForm),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("berhasil login")
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