import React, { useState, useEffect } from "react";
import { Table } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
function Lista({ datos, filtro }) {
  const [mostrar, setMostrar] = useState([{}]);
  //no se porque puse esto aqui en el momento tenia sentido
  //activa la funcion al detectar que la prop filtro ha sido actualizada
  useEffect(() => {
    setMostrar([{}]);
    let filtrados = datos;
    //funcion para activar la condicion que viene con el objeto filtro
    function evaluar(condicion) {
      const holi = element => {
        return condicion.validar(condicion, element);
      };
      return holi;
    }
    //si hay un filtro disponible se va a mapear el array filtro para aplicarlos en la lista de objetos
    if (filtro) {
      filtro.map((filt, number) => {
        filtrados = filtrados.filter(evaluar(filt));
      });
    }
    //por ultimo el resultado final se agrega a la varible de estado mostrar para que se imprima en pantalla
    setMostrar(filtrados);
  }, [filtro]);
  return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <p>Producto</p>
              </TableCell>
              <TableCell>
                <p>Precio</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mostrar.map((x, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>
                    <p>{x.name}</p>
                  </TableCell>
                  <TableCell>
                    <p>{x.price}</p>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default Lista;
