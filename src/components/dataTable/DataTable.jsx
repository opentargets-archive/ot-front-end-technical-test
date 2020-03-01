import React from 'react';
import PropTypes from 'prop-types';
import style from './DataTable.module.css';
import Row from "../row/Row";

const DataTable  = ({data}) => {

    return (
        <table className={style.table}>

            <thead className={style.header}>
            <tr className={style.row}>
                <td></td>
                <td>Symbol</td>
                <td>Gene ID</td>
                <td>Gene Name</td>
                <td>Overall Association Score</td>
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
