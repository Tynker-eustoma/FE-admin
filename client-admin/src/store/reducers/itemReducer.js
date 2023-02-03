const item = {
  item: [
      {name: "aa", price: 2, imgUrl: "aa", User: {username: "a"}, Category: {name: "a"}, Ingredients: [{name: 'a'}, {name: 'b'}, {name: 'c'}] }
  ]
}

export default function itemReducer(state = item, action){

  switch (action.type) {
    case "fetchItem":
      console.log(action, "ini acton")
      return{
        ...state,
        item: action.payload
      }
    default:
      return {
        ...state
      }
  }
}