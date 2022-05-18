import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const BarChartContainer = ({data}) => {
  return (
    <ResponsiveContainer width='100%' height={300}>
        <BarChart data={data}>
            <CartesianGrid strokeDasharray='3 3'/>
            <XAxis dataKey='date'/>
            <YAxis allpwDecimals ={false}/>
            <Tooltip/>
            <Bar type='monotone' dataKey='count' stroke='#e3e3e3' fill='#2563eb' />
        </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartContainer