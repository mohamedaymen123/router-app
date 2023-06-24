import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import { ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ImgMediaCard(item) {
    //console.log(item)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="{item.name}"
        height="140"
        image="{item.pic}"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
           
          {item.price} {" "}
        </Typography>
      </CardContent>
      <CardActions>
       <Link >
       <Button size="small">Share</Button>
       <Button size="small">Learn More</Button>
       </Link>
       
      </CardActions>
    </Card>
  );
}