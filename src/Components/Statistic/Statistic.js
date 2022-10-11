import React from 'react';
import { AreaChart, Area, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistic.css'
const data = [
    {
        name: 'React',
        Total: 8,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'JavaScript',
        Total: 9,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'CSS',
        Total: 8,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Git',
        Total: 11,
        pv: 3908,
        amt: 2000,
    },

];

const Statistic = () => {
    return (
        <div >
            <h2 className='font-weight-bold text-danger mt-3'>Total Quiz No According Topic</h2>
            <AreaChart
                className='chart-size'
                width={500}
                height={400}
                data={data}

            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="Total" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};

export default Statistic;