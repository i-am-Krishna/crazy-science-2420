import React from 'react';
import styles from "./Cart.module.css";

import { GrFormAdd } from "react-icons/gr";
import { GrFormSubtract } from "react-icons/gr";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const AddedProduct = ({data, deleteCartData}) => {
const [totalP, setTotalP] = useState(0);
const [count, setCount] = useState(1);
  const incCount = () => {
    setCount(count + 1);
    setTotalP(count*data.price)
  };

  const decCount = () => {
    setCount(count - 1);
    setTotalP(count*data.price)
  };

  const handleDelete = () => {
    deleteCartData(data.id);
  }
console.log(totalP);

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
            <img src={data.product_img} />
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
              <RiDeleteBin6Line onClick={handleDelete}
                styles={{ fontSize: "35px", marginTop: "20%" }}
              />
            </div>
          </div>
          <div>{`$ ${count * data.price}`}</div>
        </div>
</div>
</>
  )
}

export default AddedProduct
