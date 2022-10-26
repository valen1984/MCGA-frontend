import {setLoading} from "./redux/Products/actions";
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import { Form } from "./components/Form/Form";
import {useSelector, useDispatch} from 'react-redux';

const Productos =() =>{
  const dispatch = useDispatch();
  const { isLoadingProducts, products } = useSelector((state) => state.products)
 
  console.log("products", products);
  
  useEffect(() => {
    dispatch(setLoading());
  }, [dispatch]);
  return (
    <div className="App">
      <div>{String(isLoadingProducts)}</div>
      
    </div>
  );
}

export default Productos;