const Header = (props) => {
    return (
        <div>
            <header>
                <h1 className="title">Memory Card</h1>
                <div className="scores">
                    <span>Scores: {props.score}</span>
                    <span>Best Score:</span>
                </div>
            </header>
        </div>
    )
}

export default Header;