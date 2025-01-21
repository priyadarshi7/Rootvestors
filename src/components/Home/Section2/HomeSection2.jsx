import React from "react"
import "./HomeSection2.css"
import gif1 from "../../../assets/Home/Gif/homegif1.gif"
import gif2 from "../../../assets/Home/Gif/homegif2.gif"
import gif3 from "../../../assets/Home/Gif/homegif3.gif"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function HomeSection2(){
    return(
        <div className="home-section-2">
            <div className="home-section-2-heading">
                What's Wrong With Education System
            </div>
            <div className="home-section-2-container">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={gif1}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Outdated Curriculum
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Only 27% of schools offer any form of entrepreneurship education
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={gif2}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ineffective Training
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Only 11% of business leaders think higher education is preparing student effectively
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={gif3}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Skills Gap
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        40% of employers say college graduates lack critical thinking skills
        </Typography>
      </CardContent>
    </Card>
            </div>
        </div>
    )
}