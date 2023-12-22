import {useState} from "react";

export const useEntradas = () => {

    const [entradasCompradas, setEntradasCompradas] = useState(0); // Nuevo estado
    return { entradasCompradas, setEntradasCompradas };
};   