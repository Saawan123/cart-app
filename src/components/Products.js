import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';
const Products = () => {
    const dispatch = useDispatch();
    const {data:products,status} = useSelector((state) => state.product);
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     // console.log(data);
        //     setProducts(data);
        // };
        // fetchProducts();

        dispatch(fetchProducts());
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product))
    };
    if(status === STATUSES.LOADING){
        <h2>Loading....</h2>
    }

    if(status === STATUSES.ERROR){
        <h2>Something went Wrong....</h2>
    }

    return (
        <div className='productsWrapper'>
            {
                products.map((product) => (
                    <div className='card' key={product.id}>
                        <img src={product.image} alt="" />
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button onClick={() => handleAdd(product)} className='btn'>Add To Cart</button>

                    </div>
                ))
            }
        </div>
    )
}

export default Products