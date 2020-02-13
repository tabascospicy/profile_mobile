import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { Input } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
function Buscador(props) {
  const [filtro, setFiltro] = useState([]);
  const [thisCategory, setCategory] = useState("All");
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(0);
  // activaar el filtro por categoria
  const addFiltroCategory = e => {
    let value = props.filters.category;
    value.kind = e.target.value;
    setCategory(e.target.value);
    props.setFilters([...(props.OnFilters || ""), value]);
  };
  useEffect(() => {
    if (min <= max) {
      let value = props.filters.price;
      value.min = min;
      value.max = max;
      props.setFilters([...(props.OnFilters || ""), value]);
    }
  }, [min, max]);
  //activar el filtro por precio se toman los datos y se envian al metodo recivido en las props
  /* const addPrecio = (e) =>{
         
    } 
    //filtro para precios solo si el min es menor a max

    //se activa cuando el minimo cambia
    const  addMin =async(e)=>{
        await setMin(parseInt(e.target.value));
         console.log(min)
         if(min <= max){
              addPrecio(e);
         }
    }
    // se activa cuando el maximo cambia
    const addMax = async (e)=>{
    await setMax(parseInt(e.target.value));
     console.log(max)
     if(min <= max){
          addPrecio(e);
     }
}*/
  return (
    <div className="flex-center-column" >
      <TextField type="text" placeholder={"Search"} style={{margin:" 10px"}}/>
      <Select
        style={{ margin: "10px" }}
        value={thisCategory}
        onChange={e => {
          addFiltroCategory(e);
        }}
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="electronica">electronica</MenuItem>
        <MenuItem value="domestico">domestico</MenuItem>
        <MenuItem value="pc">pc</MenuItem>
        <MenuItem value="celulares">celulares</MenuItem>
      </Select>
      <Input
        type="number"
        placeholder="min"
        value={min}
        onChange={e => {
          setMin(parseInt(e.target.value));
        }}
        style={{margin:" 10px"}}
      />
      <Input
        type="number"
        placeholder="max"
        value={max}
        style={{margin:" 10px"}}
        onChange={e => {
          setMax(parseInt(e.target.value));
        }}
      />
    </div>
  );
}

export default Buscador;
