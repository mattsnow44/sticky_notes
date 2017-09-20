export const addSticky = (sticky) => {
  return {type: 'ADD_STICKY', sticky}
}

export const deleteSticky = (id) => {
  return {type: 'DELETE_STICKY', id}
}

export const updateSticky = (sticky) => {
  return {type: 'UPDATE_STICKY', sticky}
}
