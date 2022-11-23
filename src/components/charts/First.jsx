import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function First() {

    const data = [
        {
            name: 'Page A',
            uv: 2000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Oct',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Nov',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Dec',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
    ];

    return (
        <>
            <ResponsiveContainer width="95%" height={300}>
                <LineChart
                    data={data}
                    margin={{
                        top: 15,
                        right: 10,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" />
                    {/* <YAxis /> */}
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}
