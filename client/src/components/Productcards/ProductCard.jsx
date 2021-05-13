import React from 'react'
import {Link} from 'react-router-dom'
import './productCard.css'
import { Button } from '@material-ui/core';

const ProductCard = props => {
    return (
        <div className="fdiv">
        <div className="productcard text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="car" className="productcard-img-top"/>
            </div>
            <div className="productcard-body text-dark">
                <h1 className="card-title">
                    {props.title}
                </h1>
                <p className="productcard-text1 text-secondary">
                    {props.subtext}
                    <br></br>
                    Price : {props.price}
                </p>
                <Button href={props.refr} className="bt1" variant="contained" color="primary">Book Now</Button>
            </div>
        </div>
        </div>
    );
};

export default ProductCard;