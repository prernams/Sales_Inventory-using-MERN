import React from 'react';

const axios = require('axios');

class ProductsPage extends React.Component {
    componentDidMount(){
        document.title = "Sales Inventory"
      }

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            product_id: "",
            product_category: "",
            product_name: "",
            product_price: "",
            product_quantity: "",   
            product_order_qty: "",
            min_order_qty: 0     
        };
        this.onSubmit = this
            .onSubmit
            .bind(this);



    }

    componentDidMount() {
        window.addEventListener("keydown", this.keyHandling);

        axios
            .get('http://localhost:7000/products/')
            .then(response => {
                this.setState({products: response.data});
                console.log(this.state.products)
            })
            .catch(function (error) {
                console.log(error);
            })

    }


    componentWillUnmount()
    {
        window.removeEventListener("keydown", this.keyHandling);
    }



    onSubmit = () => {
        
        const info = {
            "product_id": this.refs.product_id.value,
            "product_name": this.refs.product_name.value,
            "product_category": this.refs.product_category.value,
            "product_quantity": this.refs.product_quantity.value,
            "product_price": this.refs.product_price.value,
            "quantity_sold": 0,
            "min_stock_qty": this.refs.min_order_qty.value,
            "order_qty": 0,
            "order_subtotal": 0,
            "place_order": false

        };


        

        axios
            .post('http://localhost:7000/products/add', info)
            .then(res => {
                console.log('POSTRESULTSDATA:' + res.data);
                //console.log(JSON.stringify(info))
            })
            .catch(function (error) {
                console.log(error);
            })

    };




    keyHandling = (key) => {
        console.log("Key code: " + key.keyCode);
        var ENTER_KEY = 13;

        switch (key.keyCode) {
            case ENTER_KEY:
                key.preventDefault();
                return false;
            default:
                break;
        }

    };


    render() {
        let products = this.state.products

        return (
            <div>
                <center>
                    <header
                        className="App-header"
                        style={{
                        height: '50px'
                    }}>
                        <link
                            rel="stylesheet"
                            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                            crossorigin="anonymous"/>

                        <strong>
                            Products
                        </strong>
                    </header>
                    <div>
                        <br/>
                        <React.Fragment>
                            <form>
                            <table>
                                <center>
                                    <div>
                                <tr height="60"><td align="right">ID:</td>
                                <td><input
                                        type="text"
                                        placeholder="id"
                                        ref="product_id"/></td></tr>
                                <tr height="60"><td align="right">Name:</td>
                                <td><input
                                        type="text"
                                        placeholder="name"
                                        ref="product_name"
                                        /></td></tr>
                                <tr height="60"><td align="right">Category:</td>
                                <td align="left"><input
                                        type="text"
                                        placeholder="category"
                                        ref="product_category"/></td></tr>
                                <tr height="60"><td align="right">Qty:</td>
                                <td><input
                                        type="text"
                                        placeholder="quantity"
                                        ref="product_quantity"/></td></tr>
                                <tr height="60"><td align="right">Price:</td> 
                                <td><input
                                        type="text"
                                        placeholder="price"
                                        ref="product_price"/></td></tr>
                                <tr height="60"><td align="right">Min. Order Qty:</td>
                                <td><input
                                        type="text"
                                        placeholder="min order qty" 
                                        ref="min_order_qty"/></td></tr>
                                    </div>
                                    <button onClick={this.onSubmit} class="bnt" type="submit">Save Product
                                    </button>
                                </center>
                            </table>
                            </form>

                        </React.Fragment>
                        <div>
                            <table
                                className="table table-striped"
                                style={{
                                marginTop: '20px'
                            }}>

                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity Sold</th>
                                        <th scope="col">Min. Stock Qty.</th>
            
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product => <tr>
                                        <td>{product.product_id}</td>
                                        <td>{product.product_name}</td>
                                        <td>{product.product_category}</td>
                                        <td>{product.product_quantity}</td>
                                        <td>{product.product_price}</td>
                                        <td>{product.quantity_sold}</td>
                                        <td>{product.min_stock_qty}</td>
     
                                    </tr>))}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </center>
            </div>
        );
    }
}
export default ProductsPage;
