import React from 'react';
import styles from "./Cart.module.css";
import { GrFormAdd } from "react-icons/gr";
import { GrFormSubtract } from "react-icons/gr";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { deleteCart, setCart } from '../../Redux/App/action';
import { useEffect } from 'react';
import axios from 'axios';

const AddedProduct = ({_id,price,imageUrl_1}) => {
const [totalP, setTotalP] = useState(0);
const [count, setCount] = useState(1);
const dispatch = useDispatch();
  const incCount = () => {
    if(count>0){
      setCount(count + 1);
      setTotalP(count*price)
    }
  };
  const decCount = () => {
    if(count>1){
      setCount(count - 1);
      setTotalP(count*price)
    }
  };
  useEffect(()=>{
    if(_id){
      dispatch(setCart())
    }
  },[_id])
 async function handleDelete (_id){
    dispatch(deleteCart(_id)).then((res)=>console.log(res.data)).then(()=>window.location.reload());
  // let res = await axios.delete(`http://localhost:8000/api/cart/${_id}`)
  // let data = res.data;
  // dispatch(setCart())
  // console.log(data)


}
  return (
    <>
    <div className={styles.counterContainer}>
          <div className={styles.Productimg}>
            <p>Product</p>
          </div>
          <div>
          <p>QUANTITY</p>
          </div>
          <div>
            <p>TOTAL</p>
          </div>
        </div>
        
    <div className={styles.ProductContainer}>
    
        <div className={styles.TotalContainer}>
          <div className={styles.imageContainer}>
            <img src={imageUrl_1} />
          </div>
          <div className={styles.CounterF}>
            <div className={styles.minus}>
              <button onClick={decCount}>
                <GrFormSubtract style={{ fontSize: "20px" }} />
              </button>
            </div>
            <div className={styles.CountSec}>
              <h1>{count}</h1>
            </div>
            <div className={styles.plus}>
              <button onClick={incCount}>
                <GrFormAdd style={{ fontSize: "20px" }} />
              </button>
            </div>
            <div className={styles.Delete}>
              <RiDeleteBin6Line onClick={()=> handleDelete(_id)}
                styles={{ fontSize: "35px", marginTop: "20%" }}
              />
            </div>
          </div>
          <div style={{paddingRight:"50px"}}>{`$ ${count *price}`}</div>
        </div>
</div>
</>
  )
}

export default AddedProduct
