import Buscador from "./buscador";
import Lista from "./../lista/lista";
import {productos} from './productos';
import React, { useState } from "react";
function BuscadorContent() {
  const [datos] = useState(productos);
  // este es un template para registrar los tipos de filtros disponibles este se manda al componente buscador por props
  const [template] = useState({        //tipos de busqueda 
    //cada filtro posee sus propias variables y una respectiva funcion de validacion que devuelve true si cumple con la considicion
    category : {
      name: "category",
      kind: "",
      validar: function(filter, cate) {
        let find = false;
        if(filter.kind==="All"){
          return true;
        }else{
          cate.tags.map((tag)=>{
          console.log(filter.kind,tag)
          if(filter.kind === tag){
            find = true;
          }
        })
        return find
        }
      }
    },
   price: {
      name: "price",
      price: 0,
      min:0,
      max:0,
      validar: function( {min, max},{price}) {
        let find = (min <= price && price <= max) ? true :false; 
        console.log(price,min,max,find)
        return find ;
      }
    },
  }
  );
  //este es el array que contiene los filtros en total que se estaran utilizando 
  //al activarse un filtro este se va a pushear a este array
  const [filtros,setFiltros] = useState([])
  return (
    <div className="content flex-center-column" style={{background:"white",padding:"2rem"}}>
      <Buscador OnFilters={filtros} filters={template} setFilters={setFiltros} />
      <Lista datos={datos} filtro={filtros} />
    </div>
  );
}

export default BuscadorContent;
