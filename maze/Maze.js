const Maze = ({
  dimensions,
  movements,
  setMovents,
  setMenu,
}) => {
  const container = {
    gridTemplateColumns: `repeat(${dimensions.width * 3 + 1},auto)`,
    gridTemplateRows: `repeat(${dimensions.height * 2},auto)`,
  }
  const data = useApi(dimensions.width, dimensions.height)
  const pos = {
    x: 1,
    y: 1,
    maze: [],
    movements,
    sprite: 'https://findicons.com/files/icons/1681/siena/256/wall_red.png',
  }
  const [position, dispatcher] = React.useReducer(useMovement, pos)
  const handleKeyDown = (event) => {
    dispatcher({ type: event.key, action: 'MOVEMENT' })
  }
  React.useEffect(() => {
    if (position.x === dimensions.width * 3 - 1
      && position.y === dimensions.height * 2 - 1) {
      setMovents(position.movements)
      setMenu(2)
    }
  }, [position])
  React.useEffect(() => {
    dispatcher({ action: 'LOADED', maze: data.maze })
    if (document.getElementById('focus')) document.getElementById('focus').focus()
  }, [data])

  if (data.isLoading) {
    return (
      <div className="loading">
        {data.error ? (
          <h1 className="title">Something went wrong :(</h1>
        ) : (
          <div className="loadingImage" />
        )}
      </div>
    )
  }
  return (
    <div className="background">
      <div style={container} className="maze">
        {data.maze.map((row) => row.map((cell) => {
          switch (cell) {
            case 'p':
              return <Empty />
            case 'g':
              return <Goal />
            case ' ':
              return <Empty />
            default:
              return <Wall />
          }
        }))}
      </div>
      <div
        tabIndex="-1"
        id="focus"
        style={container}
        className="maze"
        onKeyDown={handleKeyDown}
        role="button"
      >
        {data.maze.map((row) => row.map((cell) => {
          if (cell === 'p') return <Player position={position} />
          return <Empty />
        }))}
      </div>
    </div>
  )
}
