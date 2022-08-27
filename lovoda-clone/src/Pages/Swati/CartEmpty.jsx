import React from 'react'
import styles from "./Cart.module.css";

const CartEmpty = () => {
  return (
    <>
    <div className={styles.CartdivEmpty}>
      <div className={styles.firstParaempty}>
        <p>Your cart is empty</p>
      </div>
      <div className={styles.firstParaempty2}>
      <button>Continue shopping</button>
      </div>

      <div className={styles.firstParaempty3}>
        <p>Have an account ?</p>
      </div>
      <div className={styles.firstParaempty4}>
        <p>Log in to check out faster</p>
      </div>
</div>
    </>
  )
}

export default CartEmpty
