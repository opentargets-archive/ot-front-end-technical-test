import React from 'react';
import DataTableWrapper from '../dataTable/DataTableWrapper';
import style from './Layout.module.css'

const Layout = () => {
    return (
        <div className={style.container}>
            <h2>Genes associated with lung carcinoma</h2>
            <DataTableWrapper />
        </div>
    )
};

export default Layout;
