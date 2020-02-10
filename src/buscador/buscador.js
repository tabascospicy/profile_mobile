import React,{useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { Input } from '@material-ui/core';                       
import MenuItem from '@material-ui/core/MenuItem';
function Buscador(props) {
     const [filtro, setFiltro] = useState([
        ]);
        const [min,setMin] = useState(0);
        const [max,setMax] = useState(0);
     const addFiltroCategoria  = (e) => {
        let value = props.filtro;
        value.categoria = e.target.value;
        props.setFiltro([ ...props.filtros||'',value]);
    }
    const addPrecio = (e) =>{
         let value = props.precio;
         value.min = min;
         value.max = max;
         props.setFiltro([ ...props.filtros||'',value]);
    } 
    const addMin =(e)=>{
         setMin(parseInt(e.target.value));
         console.log(min)
         if(min <= max){
              addPrecio(e);
         }
    }
    const addMax =(e)=>{
     setMax(parseInt(e.target.value));
     console.log("holi")
     if(min <= max){
          addPrecio(e);
     }
}
  return (
  
       <div className="flex-center-column" style={{background:"white"}}>
           <TextField type="text" placeholder={"Search"}/>
           <Select style={{margin:'10px'}} value="All" onChange={(e)=>{addFiltroCategoria(e)}}>
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="electronica">electronica</MenuItem>
                <MenuItem value="domestico">domestico</MenuItem>
                <MenuItem value="pc">pc</MenuItem>
                <MenuItem value="celulares">celulares</MenuItem>
           </Select>
           <Input type="number" placeholder="min" value={min} onChange={(e)=>{addMin(e)}}/>
           <Input type="number" placeholder="max" value={max} onChange={(e)=>{addMax(e)}}/>
       </div>
  
  );
}

export default Buscador;