import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'

export default function TodayMatches() {

    const [matches, setMatches] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    const fetchMatches = async term => {
        setIsLoading(true)
        try {
            const response = await fetch(`https://api.football-data.org/v2/matches`, {
                headers: {
                    'X-Auth-Token': process.env.REACT_APP_API_KEY
                }
            })
            const match = await response.json();
            console.log("asasa", match)
            setMatches(match.matches)
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
        if (matches.length===0) return <p className='sorryMessage'>Sorry today no matches</p>
        
        return (
            <div>

                <p className='glx'>Today matches</p>
                {matches.map(match => (
                    <div className='match' key={match.id}>
                        <Link className='teamLink' to={`TeamInfo/${match.homeTeam.id}`}><p> {match.homeTeam.name}</p></Link>   <span>{match.score.fullTime.homeTeam}</span> - <span> {match.score.fullTime.awayTeam}</span>  <Link className='teamLink' to={`TeamInfo/${match.awayTeam.id}`}> <p>{match.awayTeam.name}</p></Link>
                        <p>{match.status} {match.utcDate.slice(11,-1)}</p>
                        <p>{match.competition.name}</p>
                        <br />
                    </div>
                ))}
            </div>
        )
    }

    return <div >{renderMatches()}</div>;
}
