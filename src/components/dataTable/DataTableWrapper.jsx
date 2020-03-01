import React from 'react';
import { fetchData } from "../../services/ApiService";
import DataTable from "./DataTable";
import Pagination from "../pagination/Pagination";
import {PAGE_SIZE} from "../../constants/constants";

const DataTableWrapper = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [dataSize, setDataSize] = React.useState(0);
    const [currentPage, setCurrentPage] = React.useState(0);



    React.useEffect(() => {
        setIsLoading(true);
        fetchData()
            .then(res => {
                setData(res.data);
                setDataSize(res.size);
            })
            .catch((e) => {

                console.error(e);
                //TODO Err handling
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, []);

    if (!isLoading) {
        return <>
                  <DataTable data={data.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE)} />
                  <Pagination setPage={setCurrentPage}
                              currentPage={currentPage}
                              totalPages={Math.ceil(dataSize / PAGE_SIZE)}/>
               </>
    }
    return <span>Loading...</span>
};

export default DataTableWrapper;
