import React from 'react';

import { PieChart, Pie, Cell, ResponsiveContainer, Label }  from 'recharts';


export default function myPieChart(){
const chartData = [
    {salary: 'january' , value : 20_000 }, 
    {salary: 'february' , value : 22_000}, 
    {salary: 'march ', value : 24_000},
    {salary: 'april', value : 26_000 },
    {salary: 'May', value :  28_000}
];

    return(
        <ResponsiveContainer >
         <PieChart >
             <Pie
             data={chartData}
             dataKey="value"
             nameKey="salary"
             cx={120}
             cy={120}
             fill="#8884d8" 
             innerRadius={60}
             outerRadius={80}
             >

             </Pie>
         </PieChart>
        </ResponsiveContainer>
    );
}