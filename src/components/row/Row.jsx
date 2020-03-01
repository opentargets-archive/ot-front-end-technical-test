import React from 'react';
import style from './Row.module.css'
import ChartWrapper from "../charts/ChartWrapper";

const Row = ({ data }) => {
    console.log('data', data);
    const [showGraph, setShowGraph] = React.useState(false);
    const {literature, rna_expression, genetic_association, somatic_mutation, known_drug, animal_model, affected_pathway} = data.association_score.datatypes;

    return (<>
        <tr>
            <td className={style.expandBtn} onClick={() => setShowGraph(!showGraph)}>
                {showGraph ? '-' : '+'}
            </td>
            <td>{data.target.gene_info.symbol}</td>
            <td>{data.target.id}</td>
            <td>{data.target.gene_info.name}</td>
            <td>{data.association_score.overall}</td>
        </tr>

        {showGraph ?
            <tr>
                <td colSpan="5">
                    <ChartWrapper data={data} />
                </td>
            </tr>
            :
            null
        }


    </>);
};

export default Row;
