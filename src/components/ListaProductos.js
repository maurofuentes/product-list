import React, { Component } from 'react';

class ListaProductos extends Component {

    constructor(props) {
        super(props);
    }

   
    render() {
        return (
            <div>
                <h2>
                    {this.props.titulo}
                </h2>

                <ul>
                    {this.props.stock}
                </ul>
              
            </div>
        )
    }

}

export default ListaProductos;