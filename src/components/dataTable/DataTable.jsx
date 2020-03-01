import React from 'react';
import PropTypes from 'prop-types';
import style from './DataTable.module.css';
import Row from "../row/Row";

const DataTable  = ({data}) => {

    return (
        <table className={style.table}>

            <thead className={style.header}>
            <tr>
                <th></th>
                <th>Symbol</th>
                <th>Gene ID</th>
                <th>Gene Name</th>
                <th>Overall Association Score</th>
            </tr>
            </thead>

            <tbody>

            {
                data.map((elem) => {
                    console.log(elem);
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
