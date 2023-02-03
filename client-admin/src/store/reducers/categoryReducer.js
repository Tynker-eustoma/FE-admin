const category = {
 category: 
     [
      {name: "aa"}
    ]
}

export default function categoryReducer(state = category, action){

    switch (action.type) {
      case "fetchCategory":
        // console.log(action, "ini action")
        return{
          ...state,
          category: action.payload
        }
      default:
        return {
          ...state
        }
    }
}