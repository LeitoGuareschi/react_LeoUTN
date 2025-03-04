const EjemploProps1 = props => {
    return (
        <h3>Hola {props.nombre}</h3>
    )
}


const EjemploPorps2 = props => {

    const { elementos } = props;

    return (
        <ul>{elementos.map(elemento => <li key={elemento}> {elemento}</li>)}</ul>
    )

}


const EjemploPorps3 = ({ titulo, subtitulo, cuerpo }) => {

    return (
        <div className="noticias">
            <h4>{titulo}</h4>
            <h5>{subtitulo}</h5>
            <p>{cuerpo}</p>
        </div>
    )
}


const EjemploProps4 = props =>{
    return(
        <label>ver en consola
            <input type="text" onChange={(e) => props.cambiarvalor(e.target.value)} />
    </label>
    )
 }

 const EjemploPorps5 = props => {
    
    const handerClick = e =>{
        if(props.eventoClick) {
            props.eventoClick('me cliqueaste')
        }
    }

    return(
        <p><button onClick={handerClick}>Cliqueame</button></p>
    )

 }



export {
    EjemploProps1,
    EjemploPorps2,
    EjemploPorps3,
    EjemploProps4,
    EjemploPorps5
    /* aca usamos {} y no export defalult porque son varios componetes distintos
    lo que vamos a exportar*/
}