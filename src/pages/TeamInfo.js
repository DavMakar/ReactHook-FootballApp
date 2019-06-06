import React, { useState, useEffect } from 'react'

export default function TeamInfo({ match }) {

    const [teams, setTeams] = useState([])
    const [squads, setSquads] = useState([])
    
    const teamID = match.params.id;
    const fetchTeams = async term => {

        try {
            const response = await fetch(`https://api.football-data.org/v2/teams/${term}`, {
                headers: {
                    'X-Auth-Token':process.env.REACT_APP_API_KEY
                }
            })
            const team = await response.json();
            console.log("team", team)
            setTeams(team)
            setSquads(team.squad);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTeams(teamID)

    }, [teamID])

    return (
        <div>

            <div className='team'>
                <p className='teamName'>{teams.name}</p>
                <img src={teams.crestUrl} className='logo' alt="not found" height='150' width='150' />
                <a className='webSite' href={teams.website} >Web Site</a>
                <div className="squad">
                    <table>
                        <tbody>
                            <tr className='firstTr'> 
                                <td>Player</td>
                                <td>Position</td>
                                <td>Country</td>
                            </tr>
                            {squads.map(squad => (

                                <tr>
                                    <td>{squad.name}</td>
                                    <td>{squad.position || squad.role}</td>
                                    <td>{squad.countryOfBirth}</td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>


            </div>

        </div>
    )
}
