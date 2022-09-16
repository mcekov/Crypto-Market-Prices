export const retrieveAllLines = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'RETRIEVEALLLINES',
      payload: data,
    })
  }
}

export function addFilterOption(filter) {
  return (dispatch) => {
    dispatch({
      type: 'ADD_FILTER',
      payload: filter,
    })
  }
}
