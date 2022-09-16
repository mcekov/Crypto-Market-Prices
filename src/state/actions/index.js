export const retrieveAllLines = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'RETRIEVEALLLINES',
      payload: data,
    })
  }
}
