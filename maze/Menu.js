const Menu = ({ setMenu, setDimensions, dimensions }) => (
  <div className="menu">
    <h1 className="title">Welcome to Maze</h1>
    <form className="form">
      <input
        className="input"
        type="number"
        placeHolder="Enter width"
        value={dimensions.width}
        onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
      />
      <input
        className="input"
        type="number"
        placeHolder="Enter height"
        value={dimensions.height}
        onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
      />
    </form>
    <button
      type="submit"
      className="button"
      onClick={() => setMenu(1)}
    >
      Play
    </button>
  </div>
)
