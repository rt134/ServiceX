import React from 'react'
import { Component, useState, setState } from 'react'
import { Button } from '@material-ui/core';
import ProductCard from '../Productcards/ProductCard'
import velar from '../Images/Velar.jpg'
import "./Cars.css"
class Cars extends Component{
    

    render(){
        
        return (
            
            <div className="container-fluid d-flex justify-content-center">
                <Button href="/map" className="bt1" variant="contained" color="primary">Search By Distance</Button>
                <div className="row">
                    <div className="col-md-4">
                        <ProductCard refr={'/services/cars/pay'} imgsrc={"https://imgd.aeplcdn.com/1056x594/cw/ec/37138/Tesla-Model-3-Exterior-169923.jpg?wm=0&q=85"} title={"Tesla Mode Y"} price={300} />
                    
                    </div>
                    <div className="col-md-4">
                        <ProductCard refr={'/services/cars/pay'} imgsrc={velar} title={"Velar"}  price={400}/>
                    
                    </div>
                    <div className="col-md-4">
                        <ProductCard refr={'/services/cars/pay'} imgsrc={"https://imgd.aeplcdn.com/1056x594/ec/9E/F7/10216/img/l/Toyota-Corolla-Altis-Front-view-16076.jpg?v=201711021421&q=85"} title={"Corola Altis"} price={300}/>
                    </div>
                    <div className="col-md-4">
                        <ProductCard refr={'/services/cars/pay'} imgsrc={"https://imgd.aeplcdn.com/1056x594/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-19.jpeg?q=85"} title={"Fortuner"} price={300}/>
                    
                    </div>
                    <div className="col-md-4">
                        <ProductCard refr={'/services/cars/pay'} imgsrc={"https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-exterior-right-front-three-quarter-3.jpeg?q=85"} title={"Innova crysta"} price={300}/>
                    
                    </div>
                    <div className="col-md-4">
                        <ProductCard refr={'/services/cars/pay'} imgsrc={"https://imgd.aeplcdn.com/664x374/n/cw/ec/55215/exterior-right-front-three-quarter.jpeg?q=85"} title={"Defender"} price={300}/>
                    </div>
                    <div className="col-md-4">
                        <ProductCard refr={'/services/cars/pay'} imgsrc={"https://imgd.aeplcdn.com/664x374/n/cw/ec/40535/all-new-city-exterior-right-front-three-quarter.jpeg?q=85"} title={"Hoda city"}  price={300}/>
                    
                    </div>
                    <div className="col-md-4">
                        <ProductCard refr={'/services/cars/pay'} imgsrc={"https://imgd.aeplcdn.com/664x374/n/cw/ec/41564/hyundai-creta-right-front-three-quarter9.jpeg?q=85"} title={"Creat"}  price={300}/>
                    
                    </div>
                    <div className="col-md-4">
                        <ProductCard refr={'/services/cars/pay'} imgsrc={"https://imgd.aeplcdn.com/664x374/n/cw/ec/31883/scorpio-exterior-right-front-three-quarter-2.jpeg?q=85"} title={"Scorpio"}  price={300}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cars;
