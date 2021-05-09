const useApi = (width, height) => {
  const [data, setData] = React.useState({ maze: {}, isLoading: true, error: false })
  React.useEffect(() => {
    fetch(`https://donaldosebas.herokuapp.com/mazeG?type=json&w=${width}&h=${height}`)
      .then((response) => response.json())
      .then((response) => setData({ ...data, maze: response, isLoading: false }))
      .catch((error) => setData({ ...data, error }))
  }, [])
  return data
}
