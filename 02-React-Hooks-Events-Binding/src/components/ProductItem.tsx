import React, {useState} from 'react';


interface IProduct {
    sno : string;
    name : string;
    image : string;
    price : number;
    qty : number;
}

interface IProps {}
interface IState {
    product : IProduct
}

let ProductItem:React.FC<IProps> = () => {
    let [productState , setProductState] = useState<IState>({
        product : {
            sno : 'AA00AB12',
            name : 'Mi Watch',
            image : 'data:image/jpeg;base64,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',
            price : 2500,
            qty : 2
        }
    });

    let incrQty = () => {
        setProductState({
            product : {
                ...productState.product,
                qty : productState.product.qty + 1
            }
        });
    };

    let decrQty = () => {
        setProductState({
            product : {
                ...productState.product,
                qty : (productState.product.qty - 1 > 0 ) ? productState.product.qty - 1 : 1
            }
        });
    };

    let {product} = productState;
    return (
        <React.Fragment>
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3">Product Item</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolorem dolorum eum iusto non omnis porro? Atque aut consequuntur earum harum modi nisi optio qui rem rerum soluta! Dicta, magni!</p>
                        </div>
                    </div>
                </div>
            </section>
            {/*  <pre>{JSON.stringify(this.state)}</pre>*/}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover text-center table-striped">
                                <thead className="bg-dark text-white">
                                <tr>
                                    <th>SNO</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{product.sno}</td>
                                    <td>
                                        <img src={product.image} alt="" width="50" height="50"/>
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <i className="fa fa-minus-circle mx-1" onClick={decrQty}/>
                                        {product.qty}
                                        <i className="fa fa-plus-circle mx-1" onClick={incrQty}/>
                                    </td>
                                    <td>{product.price * product.qty}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default ProductItem;