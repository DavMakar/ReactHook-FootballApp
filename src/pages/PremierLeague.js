import React,{useState,useEffect} from 'react';
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'
import Table from './Table'


export default function PremierLiga() {
    const [matches, setMatches] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const matchday=38;
    const fetchMatches = async term => {
        setIsLoading(true)
        try {
            const response = await fetch(`https://api.football-data.org/v2/competitions/PL/matches?matchday=${matchday}`, {
                headers: {
                    'X-Auth-Token':process.env.REACT_APP_API_KEY
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
                <p className='glx'>Premier League matchday {matchday}</p>
                <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/f/f2/Premier_League_Logo.svg/1920px-Premier_League_Logo.svg.png" width='425' height='150' alt=""/>
                
                {matches.map(match => (
                    <div className='match' key={match.id}>
                        <Link className='teamLink' to={`teamInfo/${match.homeTeam.id}`}><h4> {match.homeTeam.name}</h4></Link>   <span>{match.score.fullTime.homeTeam}</span> - <span> {match.score.fullTime.awayTeam}</span>  <Link className='teamLink' to={`teamInfo/${match.awayTeam.id}`}> <h4>{match.awayTeam.name}</h4></Link>
                        <h5>{match.status} {match.utcDate}</h5>
                        <br />
                    </div>
                ))} 
                </div>
                    <Table comp={'PL'}/>

            </div>
           
        )
    }

    return <div >{renderMatches()}</div>;
}
