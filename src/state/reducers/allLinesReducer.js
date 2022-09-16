const allLinesReducer = (state = [], action) => {
  switch (action.type) {
    case 'RETRIEVEALLLINES':
      return action.payload
    default:
      return state
  }
}

export default allLinesReducer
