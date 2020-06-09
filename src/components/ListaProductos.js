import React, { Component } from 'react';

class ListaProductos extends Component {

    render() {
        const {titulo, stock} = this.props;

        return (
            <div>
                <h2>
                    {titulo}
                </h2>

                <ul>
                    {stock}
                </ul>
              
            </div>
        )
    }

}

export default ListaProductos;