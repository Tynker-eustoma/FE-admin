import { FETCH_ITEM } from "./actionType";
// const url = "http://localhost:3000"
const url = "https://p3-challenge1.melissa-portofolio.site"

export const fetchItemSuccess = (payload) => {
  // console.log(payload, "ini payloadddd fetch item success")
  return {
    type: FETCH_ITEM,
    payload
  }
}

export const fetchItem = () => {
  // console.log("kepanggil");
  return(dispatch) => {
    fetch(url + '/items', {
      headers: {
        'Content-Type': 'application/json',
        access_token: localStorage.access_token
      }
    })
      .then((resp) => resp.json())
      .then((data) => dispatch(fetchItemSuccess(data)));
  }
}

export const AddItem = (itemForm) => {
  return (dispatch) => {
    console.log('kepamggil')
    fetch(url + '/items', {
      method: 'POST',
      body: JSON.stringify(itemForm),
      headers: {
        'Content-Type': 'application/json',
        access_token: localStorage.access_token
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchItem())
      })
      .catch((error) => {
        console.log(error);
      })
  }
}

export const editItem = (itemForm, id) => {
  console.log(id)
  return(dispatch) => {
    fetch(url + '/items/' + id, {
      method: 'PUT',
      body: JSON.stringify(itemForm),
      headers: {
        'Content-Type': 'application/json',
        access_token: localStorage.access_token
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("success")
        dispatch(fetchItem())
      });
  }
}

export const deleteItems = (id) => {
  return(dispatch) => {
    fetch(url + '/items/' + id, {
      method: "DELETE", 
      headers: {
        'Content-Type': 'application/json',
        access_token: localStorage.access_token
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(fetchItem())
      });
  }
}