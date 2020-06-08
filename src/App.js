import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListaProductos from './components/ListaProductos';

function App() {



  const productos = [
    {
      id: 0,
      nombre: "banana",
      cantidad: 10
    },
    {
      id: 1,
      nombre: "manzana",
      cantidad: 0
    },
    {
      id: 2,
      nombre: "naranja",
      cantidad: 5
    },
    {
      id: 3,
      nombre: "durazno",
      cantidad: 1
    },
    {
      id: 4,
      nombre: "anana",
      cantidad: 0
    }
  ];

  let productosEnStock = () => productos.filter(fruta => fruta.cantidad > 0).map(fruta => <li>{fruta.nombre}</li>)

  let productosSinStock = () => productos.filter(fruta => fruta.cantidad == 0).map(fruta => <li>{fruta.nombre}</li>)

  let productosAReponerStock = () => productos.filter(fruta => fruta.cantidad == 1).map(fruta => <li>{fruta.nombre}</li>)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListaProductos titulo="Productos en stock" stock={productosEnStock()} />
        <ListaProductos titulo="Productos sin stock" stock={productosSinStock()} />
        <ListaProductos titulo="Productos a reponer stock" stock={productosAReponerStock()} />
      </header>
    </div>
  );
}

export default App;
