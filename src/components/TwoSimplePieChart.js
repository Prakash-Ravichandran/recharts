import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell, Label, LabelList } from 'recharts';

const data01 = [
  { name: 'External Links', value: 78 },
  { name: 'Internal Links', value: 22},
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
//   { name: 'Group E', value: 278 },
//   { name: 'Group F', value: 189 },
];
const data03 = [
  { name: 'External Links', value: 'External Links' },
  { name: 'Internal Links', value: 'Internal Links'},
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
//   { name: 'Group E', value: 278 },
//   { name: 'Group F', value: 189 },
];

const COLORS = ['#f44336', '#2196f3'];
const COLORS2 = ['#b8aaac', '#b8aaac'];


const LABELS = ['External Broken Links','Internal Broken Links'];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];

function CustomLabel({ viewBox ,value}){
    const {cx , cy} = {viewBox}
    return(
        <text x={750} y={120}  textAnchor="middle" dominantBaseline="central">
            <tspan alignmentBaseline="middle">
            {value}
            </tspan>
        </text>
    )
}

         const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
            return  <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>
                   {`value : ${value}`}
                </text>;
          };

          function PieChartLabel({dataKey}) {
            // const { cx1, cy1 } = {cx , cy};
            return (
              <text x={"50%"} y={"50%"} textAnchor="middle" dominantBaseline="central">
                <tspan className="chart-value font-semibold" alignmentBaseline="middle">
                  {dataKey}
                </tspan>
              </text>
            );
          }  



export default class TwoSimplePieChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';

  render() {
    return (
      <ResponsiveContainer width="100%" aspect={3}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8" 
            label ={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index
              }) => {
                console.log("handling label?");
                const RADIAN = Math.PI / 180;
                // eslint-disable-next-line
                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                // eslint-disable-next-line
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                // eslint-disable-next-line
                const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
                return (
                  <text
                    x={x}
                    y={y}
                    fill={COLORS[index]}
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                  >
                    {data01[index].name} ({value}{".0%"})
                  </text>
                );
              }}
          >
              {data01.map((currentValue,index) => (
                  <Cell key = {`cell ${index}`} fill={COLORS[index % COLORS.length]}/>
              ))}
              {/* {data01.map((currentValue,index) => (
                  <Label 
                  key = {`cell ${index}`}
                  position="left"
                  content={<CustomLabel value={"Prakash"} dataKey="name"/>}/>
              ))} */}

              {/* {data01.map((currentValue,index) => (
                  <Label 
                  key = {`cell ${index}`}
                  position="outside"
                  content={<CustomLabel value={"hello"} dataKey="name"/>}/>
              ))} */}
              <LabelList
               cx={100}
               cy={100}
               stroke="black"
               dataKey="value" 
               />

              </Pie>
          {/* <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
