import React, { useEffect, useState } from 'react'
import Axios from 'axios'
// import Card from 'react-bootstrap/Card'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Card from '@mui/material/Card'
import { Button, CardContent, CardHeader, Typography } from '@mui/material'

export const Games = () => {

  let date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  let today = `${year}-${month}-${day}`

  const [games, setGames] = useState([])

  const getGames = () => {
    Axios.get(`https://www.balldontlie.io/api/v1/games?start_date=${today}&end_date=${today}`).then(
      (res) => {
        console.log(res.data.data)
        setGames(res.data.data)
      }
    )
  }

  // useEffect(() => {
  //   Axios.get(`https://www.balldontlie.io/api/v1/games?start_date=${today}&end_date=${today}`).then(
  //     (res) => {
  //       console.log(res.data.data)
  //       setGames(res.data.data)
  //     }
  //   )
  // }, [])

  // const show = games.map((game) => {
  //   return (
  //   <Card key={game.id} variant="outlined">
  //     <CardContent>
  //       <Typography variant='h3'>{game.home_team.abbreviation} VS. {game.visitor_team.abbreviation}</Typography>
  //       <Typography variant='subtitle1'>{game.status}</Typography>
  //       <Typography className='text'>{game.home_team_score} - {game.visitor_team_score}</Typography>
  //     </CardContent>
  //   </Card>
  //   );
  // })

  return (
    <div className='games'>
      <h3>Today's Games</h3>
      <button onClick={getGames}>Get Games</button>
    </div>
  )
}
