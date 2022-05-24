import React from 'react'
import 'animate.css';
import './Home.css';
// import Iphone from './Assests/Iphone.jpg.png'
import Iphone2 from './Assests/PngItem_5368936.png'
import { Typography } from '@mui/material'
import { Card,CardMedia,CardContent,CardActions,Button } from '@mui/material'
function Home(props) {
  console.log("Home",props)
  return (
    <>
    <h1 className="animate__animated animate__flash animate__repeat-2"><center> ! Flash sale </center></h1>
    
    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={Iphone2}
        alt="Iphone"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Iphone-12-Pro &nbsp; Price: $1000
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small"
        onClick={()=>props.addToCartHandler({Price: '$1000',name:'i phone 12'})}>Add To Cart</Button>
      </CardActions>
    </Card>

    </>
  )
}

export default Home