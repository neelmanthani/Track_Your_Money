import React from 'react'
import SideBarComponent from '../components/SideBarComponent';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Bar, BarChart } from 'recharts';
import { RouteBlocker } from '../helper_files/RouteBlocker';
import { AreaChartHelper, CategoryChart } from "../helper_files/insightsHelper";
import { useState, useEffect } from "react"

function TymInsights() {
    RouteBlocker();
    const [data, setData] = useState([{}]);
    const [categoryChart, setChartData] = useState([{}]);


    useEffect(() => {
        AreaChartHelper()
            .then(data => {
                setData(data);
                // console.log(data)
            })

        CategoryChart()
            .then(data => {
                setChartData(data);
                console.log(data)
            })


    }, []);


    return (
        <div>
            <div className="main-container-home">

                <section className='title'>
                    <div><SideBarComponent /></div>
                    <h2>Insights</h2>
                </section>
                <div>
                    {/* {listItems} */}
                </div>
                <section>

                </section>
                <section >
                    {/* <ResponsiveContainer> */}
                    <AreaChart data={data}
                        width={377}
                        height={350}
                        font={10}
                        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="50%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#8884d8" stopOpacity={0.1} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="50%" stopColor="#f56c6c" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#82ca9d" stopOpacity={0.1} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" axisLine="true" style={{ fontSize: '0.8rem' }} />
                        <YAxis style={{ fontSize: '0.7rem' }} />
                        <CartesianGrid />
                        <Tooltip />
                        <Area type="monotone" dataKey="Expense" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="Income" stroke="#f56c6c" fillOpacity={1} fill="url(#colorPv)" />

                    </AreaChart>
                    {/* </ResponsiveContainer> */}
                    
                </section>
                <section>
                        <h1>Expense per category</h1>
                        <BarChart
                            width={800}
                            height={400}
                            data={categoryChart}
                            margin={{
                                top: 5,
                                right: 20,
                                left: 20,
                                bottom: 5
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="amount" fill="#8884d8" />
                            {/* <Bar dataKey="sell" fill="#82ca9d" /> */}
                        </BarChart>
                    </section>

            </div>

        </div>
    )

}

export default TymInsights