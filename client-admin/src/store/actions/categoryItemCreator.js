import { DELETE_CATEGORY, FETCH_CATEGORY } from "./actionType"

// const url = "http://localhost:3000"
const url = "https://p3-challenge1.melissa-portofolio.site"

export const fetchCategorySuccess = (payload) => {
  // console.log(payload, "ini payloadddd fetch item success")
  return {
    type: FETCH_CATEGORY,
    payload
  }
}

export const fetchCategory = () => {
  return(dispatch) => {
    fetch(url + '/categories', {
      headers: {
        'Content-Type': 'application/json',
        access_token: localStorage.access_token
      }
    })
      .then((resp) => resp.json())
      .then((data) => dispatch(fetchCategorySuccess(data)));
  }
}


export const deleteCategory = (id) => {
  console.log(id)
  return(dispatch) => {
    fetch(url + '/categories/' + id, {
      method: "DELETE", 
      headers: {
        'Content-Type': 'application/json',
        access_token: localStorage.access_token
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('berhasil')
        dispatch(fetchCategory())
      });
  }
}


export const addCategory = (itemForm) => {
  return(dispatch) => {
    fetch(url + '/categories', {
      method: 'POST',
      body: JSON.stringify(itemForm),
      headers: {
        'Content-Type': 'application/json',
        access_token: localStorage.access_token
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(fetchCategory())
      });
  }
}

export const editCategory = (itemForm, id) => {
  return(dispatch) => {
    fetch(url + '/categories/' + id, {
      method: 'PUT',
      body: JSON.stringify(itemForm),
      headers: {
        'Content-Type': 'application/json',
        access_token: localStorage.access_token
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(fetchCategory())
      });
  }
}