import alumnos from '../data/alumnos.json';

const   CargaJsaon = (props) => {

    //console.log(alumnos)

    return(
        <>
        <h1>Ejemplo carga de Json</h1>
        <ul>
            {
                alumnos.map(alumno=>(
                    <li key={alumno.nombre}>{alumno.nombre} {alumno.apellido} {alumno.edad}</li>

                ))
            }





        </ul>
        </>
    )
}


export default CargaJsaon;