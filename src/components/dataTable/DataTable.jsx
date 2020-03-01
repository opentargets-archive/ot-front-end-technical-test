import React from 'react';
import style from './DataTable.module.css';
import Row from "../row/Row";

const DataTable  = ({data}) => {

    return (
        <table className={style.table}>

            <thead>
            <tr>
                <th />
                <th>Symbol</th>
                <th>Gene ID</th>
                <th>Gene Name</th>
                <th>Overall Association Score</th>
            </tr>
            </thead>

            <tbody>

            {
                data.map((elem) => {
                    return (
                        <Row key={elem.target.id} data={elem} />
                    )
                })
            }

            </tbody>

        </table>
    )
};

export default DataTable;
