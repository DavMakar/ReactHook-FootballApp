import React,{useState,useEffect} from 'react';
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'
import Table from '../pages/Table'

export default function Ligue() {
    const [matches, setMatches] = useState([])//?stage=QUARTER_FINALS
    const [isLoading, setIsLoading] = useState(false)
    const matchday=38;
    const fetchMatches = async term => {
        setIsLoading(true)
        try {
            const response = await fetch(`https://api.football-data.org/v2/competitions/FL1/matches?matchday=${matchday}`, {
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
        return (
            <div>
                <div className='matches'>
                <p className='glx'>Ligue 1 matchday {matchday}</p>
                <img src="https://upload.wikimedia.org/wikipedia/ru/0/0e/Ligue_1_Logo.svg.png" width='300' height='200' alt=""/>
                
                {matches.map(match => (
                    <div className='match' key={match.id}>
                        <Link className='teamLink' to={`teamInfo/${match.homeTeam.id}`}><h4> {match.homeTeam.name}</h4></Link>   <span>{match.score.fullTime.homeTeam}</span> - <span> {match.score.fullTime.awayTeam}</span>  <Link className='teamLink' to={`teamInfo/${match.awayTeam.id}`}> <h4>{match.awayTeam.name}</h4></Link>
                        <h5>{match.status} {match.utcDate.slice(11,-1)}</h5>
                        <br />
                    </div>
                ))} 
                </div>
                    <Table comp={'FL1'} />

            </div>
           
        )
    }

    return <div >{renderMatches()}</div>;
}
