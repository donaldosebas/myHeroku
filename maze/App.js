const App = () => {
  const [isMenu, setMenu] = React.useState(0)
  const [movements, setMovents] = React.useState(0)
  const [dimensions, setDimensions] = React.useState({ width: '', height: '' })

  if (isMenu === 0) {
    return (
      <Menu
        setMenu={setMenu}
        setDimensions={setDimensions}
        dimensions={dimensions}
      />
    )
  } if (isMenu === 1) {
    return (
      <Maze
        dimensions={dimensions}
        movements={movements}
        setMovents={setMovents}
        setMenu={setMenu}
      />
    )
  } if (isMenu === 2) {
    return <Winner movements={movements} />
  }
  return null
}
