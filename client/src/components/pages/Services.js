import React, {useState} from 'react'
import '../../App.css'
import "./Services.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SignUp from "./SignUp"
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      maxWidth: 659,
    },
    media: {
      height: 450,
    },
  });



function Services() {
    const classes = useStyles();
    const history = useHistory();
    const navigateSignUp = () => {
        history.push("/sign-up");
    }
    const navigateSignIn = () => {
        history.push("/sign-in");
    }
    return (
        
        <div class="serviceCard">
            <div class="card">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="/images/mechanic.png"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Mechanic Booking
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Get a fair and transparent price and book a top-rated mechanic online. Your Mechanic will come to your home or office to service your car.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="large" color="secondary" onClick={navigateSignIn}>
                        Sign in
                    </Button>
                    <Button size="large" color="secondary" onClick={navigateSignUp}>
                        Sign up
                    </Button>
                </CardActions>
            </Card>
            </div>
            <div class="card">
            <Card className={classes.root}>
            
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="/images/car.jpeg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Car Booking
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Find It Cheaper And We'll Beat It. No Cancellation or Amendment Fees! We Speak Your Language. Unbeatable Prices. No Credit Card Fees.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="large" color="secondary" onClick={navigateSignIn}>
                        Sign in
                    </Button>
                    <Button size="large" color="secondary" onClick={navigateSignUp}>
                        Sign up
                    </Button>
                </CardActions>
                </Card>
                </div>
        </div>
    
    )
}

export default Services
