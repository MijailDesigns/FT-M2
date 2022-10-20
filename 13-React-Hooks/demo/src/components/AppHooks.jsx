import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// **** Ambos useDispatch y useSelector deben importarse de react-redux
import { saveName } from '../actions';

export default function AppHooks() {
  const [name, setName] = useState('Hooks');
  const [width, setWidth] = useState(window.innerWidth)

  const dispatch = useDispatch()

  // ***** useDispatch se usa para MODIFICAR el estado global
  // *** este se invoca sin pasarle parametros y se guarda en una variable y al momento de usarla se le pasan acciones por ejemplo: 
      // <button onClick={() => dispatch(saveName(name))}>
      //   Save Name
      // </button>

  const nameRedux = useSelector(state => state.name)

  // *** useSelector se usa solo para CONSUMIR el estado global a diferencial de useReducer que lo puede CONSUMIR Y MODIFICAR a su vez
  // ***** useSelector recibe el estado global por parametro y retorna una parte de este que es el que va a consumir
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => {
      console.log('Entra...');
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // ***** El useEffect de arriba equivale a las primeras dos lineas a un componentDidMount porque el segundo parametro es un [] y se ejecutara una SOLA vez y las ultimas dos lineas a un componentWillUnmount porque estan en un return y se ejecutara cuando se desmonte el componente ******

  // componentDidMount(){
  //   const handleResize = () => setWidth(window.innerWidth)
  //   window.addEventListener('resize', handleResize)
  // }

  // componentWillUnmount(){
  //   console.log('Entra...');
  //     window.removeEventListener('resize', handleResize)
  // }
  
  function handleChange(e) {
    setName(e.target.value)
  }

  useEffect(() => {
    document.title = name
  },[name])

  // este usuEffect se ejecuta cada que se modifica el state name, que es el que le pase como segundo parametro

  return (
    <div className="App">
      <input 
        value={name}
        onChange={handleChange}
      />
      <div>
        {width}
      </div>
      <button onClick={() => dispatch(saveName(name))}>
        Save Name
      </button>
      <div>
        {nameRedux}
      </div>
    </div>
  );
}

// Custom Hooks

// function useWindowWidth() {
//   const [width, setWidth] = useState(window.innerWidth);
//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth)
//     window.addEventListener('resize', handleResize)

//     return () => {
//       window.removeEventListener('resize', handleResize)
//     }
//   })
//   return width;
// }

// function useDocumentTitle(title) {
//   useEffect(() => {
//     document.title = title
//   },[title])
// }




// ***************************** Hasta el momento hemos visto los siguientos hooks, **useState** (para modificar el estado locales de componentes y leerlos), **useEffect** (hace los mismos que componentDidMount, componentDiUpdate y componentWillUnmount dependiendo de los segundos parametros que reciba o no), **useReducer** (este modifica y lee el estado global es similar o puede reemplazar al connect), **useDispatch** (se usa solamente para modificar el estado global ya que recibe funciones que despachan acciones que modifican al estado global), **useSelector** (este solo consume o lee el estado global, recibe por parametro el state y retorna una parte de este) y **useRef** que almacena una referencia de una elemento puntual del DOM