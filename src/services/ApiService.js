import axios from 'axios';
import { DATA_URL } from "../constants/constants";

export const fetchData = async () => {
    const result = await axios.get(DATA_URL);
    const sortedData = result.data.data.sort((a, b) => b.association_score.overall - a.association_score.overall);
    return {data: sortedData, size: result.data.size};
};
