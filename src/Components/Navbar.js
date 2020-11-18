function Navbar(props) {
    return (
        <div className="navbar">
            <div className="game-title">Memory</div>
            <div className="score">Score: {props.text}</div>
        </div>
    ) 
}

export default Navbar;