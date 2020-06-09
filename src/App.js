import React, {Component} from 'react';
import './App.css';
import ListaProductos from './components/ListaProductos';
import ProductForm from './components/ProductForm';

class App extends Component {

  state = {
    productos : []
  };

 
  productosEnStock = () => this.state.productos.filter(fruta => fruta.cantidad > 0).map(fruta => <li>{fruta.nombre}</li>);

  productosSinStock = () => this.state.productos.filter(fruta => fruta.cantidad === 0).map(fruta => <li>{fruta.nombre}</li>);

  productosAReponerStock = () => this.state.productos.filter(fruta => fruta.cantidad === 1).map(fruta => <li>{fruta.nombre}</li>);

  
 

  handleSubmit = e => {
    e.preventDefault();
    let nombre = e.target.nombre.value;
    let cantidad = Number(e.target.cantidad.value);

    const producto = {nombre, cantidad};
    
    console.log(producto);

    this.setState(
      {
        productos : [...this.state.productos, producto]
      }
    );
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <ProductForm
            onSubmit={this.handleSubmit}
           
          />
          <ListaProductos
            titulo="Productos en stock"
            stock={this.productosEnStock()} 
          />
          <ListaProductos
            titulo="Productos sin stock"
            stock={this.productosSinStock()}
          />
          <ListaProductos
            titulo="Productos a reponer stock"
            stock={this.productosAReponerStock()}
          />
        </header>
      </div>
    );
  }
}

export default App;
