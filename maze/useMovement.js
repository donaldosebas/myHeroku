const useMovement = (state, action) => {
  const validator = (y, x, option) => {
    if (state.maze[y][x] !== '-' && state.maze[y][x] !== '|' && state.maze[y][x] !== '+') {
      return {
        ...state,
        y,
        x,
        movements: state.movements + 1,
        sprite: option === 'ArrowUp' || option === 'ArrowDown' ? 'https://findicons.com/files/icons/1681/siena/256/wall_green.png' : 'https://findicons.com/files/icons/1681/siena/256/wall_red.png',
      }
    }
    return state
  }
  switch (action.action) {
    case 'MOVEMENT':
      switch (action.type) {
        case 'ArrowUp':
          return validator(state.y - 1, state.x, 'ArrowUp')
        case 'ArrowDown':
          return validator(state.y + 1, state.x, 'ArrowDown')
        case 'ArrowLeft':
          return validator(state.y, state.x - 1, 'ArrowLeft')
        case 'ArrowRight':
          return validator(state.y, state.x + 1, 'ArrowRight')
        default:
          return state
      }
    case 'LOADED':
      return { ...state, maze: action.maze }
    default:
      return state
  }
}
