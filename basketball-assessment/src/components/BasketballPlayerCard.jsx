const BasketballPlayerCard = ({ name, image, position, stats }) => {
    return (
        <>
            <div className="player-card">
                <img src={image} alt={`${name}`} className="player-image" />
                <h2 className="player-name">{name}</h2>
                <h3 className="player-position"> <img src="basketball-image.webp" alt="" /> {position}</h3>
                <div className="player-stats">
                    <table className="stats-table">
                        <tr>
                            <th>
                                <td>Points per Game</td>
                            </th>
                            <td className="stats-points">{stats.pointsPerGame}</td>
                        </tr>
                        <tr>
                            <th>
                                <td>Assists per Game</td>
                            </th>
                            <td className="stats-points">{stats.assistsPerGame}</td>
                        </tr>
                        <tr>
                            <th>
                                <td>Rebounds per Game</td>
                            </th>
                            <td className="stats-points">{stats.reboundsPerGame}</td>
                        </tr>
                    </table>
                </div>
            </div>

        </>
    )
}

export default BasketballPlayerCard