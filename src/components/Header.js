const Header = (props) => {
    return (
        <div>
            <header>
                <h1 className="title">Memory Card</h1>
                <div className="scores">
                    <div>Score: {props.score}</div>
                    <div>High Score: {props.bestScore}</div>
                </div>
            </header>
        </div>
    )
}

export default Header;