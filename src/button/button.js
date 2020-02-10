import React,{useState, useEffect} from 'react';

function CustomButton(props) {
    const [atributos,setAtributos]= useState({
        type:"button",
    });
    useEffect((props)=>{
        if(props.type){
         /*   props.map({})
            setAtributos()*/
        }
    },[])
    const Boton =()=>{
        return <button {...atributos}>{props.children}</button>
    }
    const Input = ()=>{
        return   <input {...atributos}/>
    }
  return (
    (atributos.type==="button") ? <Boton/> : <Input/>
  );
}

export default CustomButton;