import { EjemploProps1, EjemploPorps2,EjemploPorps3,EjemploProps4,EjemploPorps5 } from "../componentes/Props";

// const nombre2 = 'Jeremias';

const frutas = ['Mamzana', 'Bananas', 'Palta', 'Naranjas'];

const equipos = ['Argentina', 'Colombia', 'Uruguay', 'Canada']

const mostrarValor = valor => {
    console.log(valor)
}



const Ejemplo1 = (props) => {
    return (

        <div>
            <h1>Ejemplos de Porpiedades</h1>
            {/*propiedad simple y que puedo reutilizar*/}
            <EjemploProps1 nombre='Leonel' />
            <EjemploProps1 nombre='Jeremias' />
            {/* listar elementos (array) */}
            <EjemploPorps2 elementos={frutas} />
            <EjemploPorps2 elementos={equipos} />
            {/* varias propiedades */}
            <EjemploPorps3 titulo= 'Hola soy el titulo' subtitulo= 'subtitulo bien grande' cuerpo= 'Hola soy el contenido de esta noticia'/>
            {/* funcion */}
            <EjemploProps4 cambiarvalor={mostrarValor}/>

            {/* este no anda por que si o si necesita de cambiarValor */}
            <EjemploProps4/>

            {/* como lo requiere si o si podemos tb pasarle una funcion vacia */}
            <EjemploProps4 cambiarValor={() => {} }/>


            <EjemploPorps5 eventoClick={mostrarValor}/>
            
            {/* si no se coloque la props eventoclick no se exploto react a diferencia del ejemplo4 */}
            <EjemploPorps5/>

        </div>
    )
}

export default Ejemplo1;
