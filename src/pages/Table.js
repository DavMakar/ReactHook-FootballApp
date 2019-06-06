import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'

export default function Table({ comp }) {
    const [table, setTable] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [competitions, setCompetitions] = useState([])
    
    const fetchMatches = async term => {
        setIsLoading(true)
        try {
            const response = await fetch(`https://api.football-data.org/v2/competitions/${comp}/standings`, {
                headers: {
                    'X-Auth-Token': process.env.REACT_APP_API_KEY
                }
            })
            const table = await response.json();
            console.log("asasa", table)
            setCompetitions(table.competition)
            setTable(table.standings[0].table)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchMatches()

    }, [])

    const renderMatches = () => {
        if (isLoading) return <Loader />
        return (
            <div>

                <p className='glxTable' >{competitions.name} Table</p>
                <div className="table">
                    <table>
                        <tbody>
                            <tr className='firstTr'>
                                <td>Position</td>
                                <td>Team</td>
                                <td>Played Games</td>
                                <td>Won</td>
                                <td>Draw</td>
                                <td>Lost</td>
                                <td>Points</td>
                            </tr>

                            {table.map(table => (
                                <tr key={table.team.id}>
                                    <td>{table.position}</td>
                                    <td><Link className='teamName' to={`TeamInfo/${table.team.id}`}>{table.team.name}</Link> <img src={table.team.crestUrl} alt="Not found" width='30' height='30' /></td>
                                    <td>{table.playedGames}</td>
                                    <td>{table.won}</td>
                                    <td>{table.draw}</td>
                                    <td>{table.lost}</td>
                                    <td>{table.points}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    return <div >{renderMatches()}</div>;
}
