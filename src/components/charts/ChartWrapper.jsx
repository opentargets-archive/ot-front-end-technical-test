import React from 'react';
import Chart from "./Chart";

const ChartWrapper = ({ data }) => {

    const {literature, rna_expression, genetic_association, somatic_mutation, known_drug, animal_model, affected_pathway} = data.association_score.datatypes;
    const labels = ['literature', 'rna_expression', 'genetic_association', 'somatic_mutation', 'known_drug', 'animal_model', 'affected_pathway'];
    const values = [literature, rna_expression, genetic_association, somatic_mutation, known_drug, animal_model, affected_pathway];

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Association Score vs Data Types',
                data: values,
                backgroundColor: 'rgba(52, 137, 202, 1)',
            }
        ],
        options: {
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'score',
                    },
                    ticks:{
                        beginAtZero: true
                    }

                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Data types'
                    },
                }]
            }
        }
    };

    return <Chart chartData={chartData} />
}

export default ChartWrapper
