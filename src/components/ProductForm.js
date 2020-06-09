import React, {Component} from 'react';

class ProductForm extends Component{


    render(){
        
        const {onSubmit}=this.props;
        
        return(
            <div>
                <form onSubmit={onSubmit}>
                    <br></br>
                    <legend>-Agregar productos-</legend>
                    <label>Nombre: </label>
                    <input 
                        type="text"
                        name="nombre"
                        placeholder="Nombre del Producto"
                        
                    />
                    <br></br>
                    <label>Cantidad: </label>
                    <input
                        type="number"
                        name="cantidad"
                        placeholder="Cantidad de stock"
                        
                    />
                    <br></br>
                    <input
                        type="submit"
                        value="Agregar"                    
                    />
                </form>
            
            
            </div>
        )
        

    }




}

export default ProductForm;