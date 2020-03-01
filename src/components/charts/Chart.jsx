import React from 'react';
import {Bar, Radar} from 'react-chartjs-2';
import style from './Charts.module.css'

const Chart = ({chartData}) => {

    const [isRadar, setIsRadar] = React.useState(false);

    return (
        <>
            <button className={style.switchBtn} onClick={() => setIsRadar(!isRadar)}>Switch Chart Type</button>
            {
                isRadar ?
                    <Radar data={chartData} options={chartData.options} /> :
                    <Bar data={chartData} options={chartData.options} />
            }
        </>

    )
}

export default Chart;
