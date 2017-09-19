const stickies = (state = [], action) => {
  switch(action.type) {
    case 'ADD_STICKY':
      return [...state, action.sticky]
    case 'DELETE_STICKY':
      return state.filter( s => s.id !== action.id )
    default:
      return state;
  }
}

export default stickies;
