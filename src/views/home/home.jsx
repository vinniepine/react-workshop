import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const Home = () => {
    const [valor, setValor] = useState(0); 
    const [valor2, setValor2] = useState([]);

    useEffect(() => {
        setValor(0);
    }, []);

    useEffect(() => {
        if (valor > 0) {
            setValor2((prevValor2) => [...prevValor2, valor]);
        }
    }, [valor]);

    return (
        <>
            <Typography variant="h1">Clicks: {valor}</Typography>
            <Button 
                variant="contained"
                onClick={() => setValor(valor + 1)}>
                Click here!
            </Button>

            {valor2?.map((item, index) => (
                <Typography key={index} variant="h3">
                    {item}º - CLIKS
                </Typography>
            ))}
        </>
    );
};