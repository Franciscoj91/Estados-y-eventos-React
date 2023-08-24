import { useState } from 'react';

const Contador = () => {

    const [cuenta, setCuenta] = useState(0)
    const [texto, setTexto] = useState("Cuenta")
    return (
        <>
            <button onClick={() => {
                setCuenta(cuenta + 1);
                setTexto("Cambio")
            }
            }>
                {texto}: {cuenta}
            </button>
        </>
    )
}

export default Contador;