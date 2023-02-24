const item = {
  item: [
      {imgUrl: "aa", answer: "", optionA: "aa", optionB: "b", optionC: "c", optionD:  'a', lvl: 1, question: 'd', CategoryId: 1 }
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