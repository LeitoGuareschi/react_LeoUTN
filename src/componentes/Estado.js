import { useState } from "react";
import '../styles/estado.css';


function EjemploEstado(props) {

    const [counter, setCounter] = useState(0);

    // console.log(counter)

    return (
        <div className="contenedor">
            <div>
                <h3>contador: {counter}</h3>
            </div>
            <div className="botones">
                <button className="error" onClick={() => setCounter(counter - 1)}> - </button>
                <button className="success" onClick={() => setCounter(counter + 1)}> + </button>

            </div>
        </div>
    )
}


export { EjemploEstado }