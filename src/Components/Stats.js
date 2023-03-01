import React, {useEffect, useState} from 'react'
import Axios from 'axios'

export const Stats = () => {

  const [stats, setStats] = useState([])
  const [teams, setTeams] = useState([])
  const [team, setTeam] = useState({})

  const getStats = () => {
    Axios.get("https://www.balldontlie.io/api/v1/stats?seasons[]=2022").then(
      (res) => {
        console.log(res.data.data)
      }
    )
  }

  // const getTeams = () => {
  //   Axios.get("https://www.balldontlie.io/api/v1/teams").then(
  //     (res) => {
  //       console.log(res.data.data)
  //       setTeams(res.data.data)
  //     }
  //   )
  // }

  useEffect(() => {
    Axios.get("https://www.balldontlie.io/api/v1/teams").then(
      (res) => {
        console.log(res.data.data)
        setTeams(res.data.data)
      }
    )
  }, [])

  const list = teams.map((team) => {
    const fave = () => {
      setTeam(team)
      console.log(team)
    }
    return (
      <li key={team.id}>{team.full_name}<button onClick={fave}>!!!THIS TEAM!!!</button></li>
    )
  })
  return (
    <div>
      <button onClick={getStats}>Get Stats</button>
      <ul>
        {list}
      </ul>
    </div>
  )
}
