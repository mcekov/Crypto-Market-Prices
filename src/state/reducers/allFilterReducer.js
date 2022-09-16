const allFilterReducer = (state = 'all', action) => {
  switch (action.type) {
    case 'ADD_FILTER':
      return (state = action.payload)
    default:
      return state
  }
}

export default allFilterReducer
