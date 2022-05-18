import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const AreaChartComponent = ({data}) => {
  return (
    <ResponsiveContainer width='100%' height={300}>
        <AreaChart data={data}>
            <CartesianGrid strokeDasharray='3 3'/>
            <XAxis dataKey='date'/>
            <YAxis allpwDecimals ={false}/>
            <Tooltip/>
            <Area type='monotone' dataKey='count' stroke='#e3e3e3' fill='#2563eb' />
        </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaChartComponent