import "../main/main.css"
import React from 'react'
import Chart from "../Charts/Charts.js"
import { Button } from '@material-ui/core';

const Main = () => {
    return (
        <main>
            <div className="main__container">
                <div classname="main__title">
                    <div className="main__greeting">
                        <h1>Hello Rt134</h1>
                    </div>
                </div>
                <div className="main__cards">
                    <div className="card101">
                    <i class="fa fa-smile fa-2x" aria-hidden="true"></i>
                        <div className="card_inner">
                    
                            <p className="text-primary-p">Happy Customers</p>
                            <span className="font-bold text-title">878796</span>
                        </div>
                    </div>
                

                    <div className="card101">
                        <i class="fa fa-car fa-2x" aria-hidden="true"></i>
                        <div className="card_inner">
                        <Button href="/car/post" variant="contained" color="primary">Register your Car</Button>
                            <p className="text-primary-p">Security Deposit Cars</p>
                            <span className="font-bold text-title">$200</span>
                        </div>
                    </div>

                    <div className="card101">
                        <i className="fa fa-wrench fa-2x text-yellow"></i>
                        <div className="card_inner">
                        <Button href="/mechanic/post" className="bt1" variant="contained" color="primary">Register as Mechanic</Button>
                            <p className="text-primary-p">Mechanics base Price</p>
                            <span className="font-bold text-title">$50</span>
                        </div>
                    </div>

                    <div className="card101">
                        <i className="fa fa-rocket fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Petrol / Diesel Price</p>
                            <span className="font-bold text-title">$12.54 / $11.23</span>
                        </div>
                    </div>
                </div>
                
                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Customer Base</h1>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart />
                    </div>
                    <div className="charts__right">
                        <div className="charts__right_-title">
                            <div>
                                <h1>Reports</h1>
                                {/* <p>Lko india</p> */}
                            </div>
                            <i className="fa fa-use"></i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Total Income</h1>
                                <p>$45142</p>
                            </div>

                            <div className="card2">
                                <h1>Sales</h1>
                                <p>$845142</p>
                            </div>

                            <div className="card3">
                                <h1>Active users</h1>
                                <p>9845142</p>
                            </div>

                            <div className="card4">
                                <h1>Pending Orders</h1>
                                <p>14</p>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>

        </main>

    );
}

export default Main;