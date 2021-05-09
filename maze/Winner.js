const Winner = ({ movements }) => (
  <div className="menu">
    <h1 className="title">Well done pal!</h1>
    <h2 className="movements">{`Movements: ${movements}`}</h2>
    <button
      type="submit"
      className="button"
      onClick={() => location.reload()}
    >
      Play again
    </button>
  </div>
)
