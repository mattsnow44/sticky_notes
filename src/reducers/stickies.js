const stickies = (state = [], action) => {
  switch(action.type) {
    case 'ADD_STICKY':
      return [...state, action.sticky]
    case 'DELETE_STICKY':
      return state.filter( s => s.id !== action.id )
    case 'UPDATE_STICKY':
      return state.map( sticky => {
        if (sticky.id === action.sticky.id)
          return action.sticky
        return sticky
    })
    default:
      return state;
  }
}

export default stickies;
