import Buscador from "./buscador";
import Lista from "./../lista/lista";
import React, { useState, useEffect } from "react";
function BuscadorContent() {
  const [datos, setDatos] = useState([
    { name: "olla", precio: 100, categoria: ["domestico"] },
    { name: "licuadora", precio: 100, categoria: ["domestico", "electrodomestico"]},
    { name: "televisor", precio: 100, categoria: ["domestico", "electronica"] },
    { name: "celular", precio: 300, categoria: ["electronica", "celulares"] },
    { name: "pc", precio: 50, categoria: ["electronica", "pc"] },
    { name: "laptop hp", precio: 500, categoria: ["electronica", "laptops"] },
    { name: "laptop asus", precio: 500, categoria: ["electronica", "laptops"] }
  ]);
  const [filtro, setFiltro] = useState({        //tipos de busqueda 
    categoria : {
      name: "categoria",
      categoria: "",
      validar: function(dato, cate) {
        let encaja;
         cate.categoria.map((categoria)=>{
          console.log(dato.categoria,categoria)
          if(dato.categoria === categoria){
            encaja = true;
          }
        })
        return encaja
      }
    },
   precio: {
      name: "precio",
      precio: 0,
      min:0,
      max:0,
      validar: function( {min, max},{precio}) {

        let encaja = (min <= precio && precio <= max) ? true :false; 
        console.log(precio,min,max,encaja)
        return encaja ;
      }
    },
  }
  );
  const [filtros,setFiltros] = useState([])
  return (
    <div className="content flex-center-column">
      <Buscador filtros={filtros} precio={filtro["precio"]}filtro={filtro["categoria"]} setFiltro={setFiltros} />
      <Lista datos={datos} filtro={filtros} />
    </div>
  );
}

export default BuscadorContent;
