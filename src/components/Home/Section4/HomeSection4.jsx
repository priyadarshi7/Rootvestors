import React from "react"
import "./HomeSection4.css"
import gif1 from "../../../assets/Home/Gif/homegif5.gif"
import gif2 from "../../../assets/Home/Gif/homegif4.gif"
import gif3 from "../../../assets/Home/Gif/homegif6.gif"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function HomeSection4(){
    return(
        <div className="home-section-2">
            <div className="home-section-2-heading">
              How We Solve
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
        Real-Life Learning
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Seamlessly integrated into existing curriculums, equipping students with practical skills for real-world readiness.
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
        Personalized Experience
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Customizable learning modules thoughtfully crafted to meet the unique and ever-changing needs of each school.
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
        Dynamic Insights
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Real-time analytics provide actionable insights into student progress and engagement levels.
        </Typography>
      </CardContent>
    </Card>
            </div>
            <div className="home-section-4"
            style={{
              display:"flex",
              alignItems:"center",
              justifyContent:"center"
            }}
            >
            <Button sx={{
              textTransform:"none",
              backgroundColor:"#4285F4",
              color:"white",
              borderRadius:"8px",
              height:"50px",
              margin:"auto",
              marginTop:"20px",
              fontSize:"20px",
              fontFamily:"Montserrat"
            }}>View Courses</Button>
            </div>
        </div>
    )
}