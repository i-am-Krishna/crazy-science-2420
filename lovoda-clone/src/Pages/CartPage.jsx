import React from "react";
import styles from "./Cart.module.css";
const CartPage = () => {
  return (
    <>
      <div className={styles.cart}>
        <div className={styles.textContainer}>
          <h1>Your Cart</h1>
          <p>Product</p>
        </div>
        <div className={styles.textContainer}>
          <h2> Continue shopping</h2>
          <div className={styles.textContainerTwo}>
            <div className={styles.quantity}>
              <p>Quantity</p>
            </div>
            <div>
              <p>TOTAL</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hRow}></div>
       <div className={styles.counter}>

        <div className={styles.Counterdivf}>
          1
        </div>
        <div className={styles.Counterdiv}> 2</div>
       </div>
      <div className={styles.btn}>
        <div>
          <button>check out</button>
        </div>
        <br />
        <div className={styles.btn2}>
          <button>
            <img src={"https://cdn.shopify.com/s/files/1/0065/7650/4896/articles/Screen_Shot_2021-07-14_at_11.26.52_AM_540x.png?v=1626287226"}/>
          </button>
        </div>
        <br />
        <div className={styles.btn3}>
          <button>
            <img
              src={"https://newsroom.paypal-corp.com/image/Library_PayPal.png"}
            />
          </button>
        </div>
        <br />
        <div className={styles.btn5}>
          <button>
          <img src={"https://d2csxpduxe849s.cloudfront.net/media/F44207E3-1DDE-4798-B0FCC94F6227FCB7/5178B7EE-CB0A-4958-8639A1B0028E2F56/webimage-10B13DE9-ABD9-4318-B33EF188C9F552F5.jpg"}/>
          </button>
        </div>
        <br />
      </div>

      <div className={styles.FeaturedContainer}>
          <div>
          <h3>Featured Collection</h3>
          </div>
           <div className={styles.imageContainer}>
              <div>
                <img src={"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010100309-1__20452_360x.jpg?v=1645111798"}/>
                <p>10mm Palette Earrings (14k Gold)</p>
                <p>$12.00</p>
              </div>

              <div>
                <img src={"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010100310-3__23072_360x.jpg?v=1645111847"}/>
                <p>10mm Palette Earrings (14k Rose Gold)</p>
                <p>$12.00</p>
              </div>

              <div>
                <img src={"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010100440-3__37743_360x.jpg?v=1645113344"}/>
                <p>10mm Palette Earrings | Bubble Gum Pink (14k)</p>
                <p>$12.00</p>
              </div>

              <div>
                <img src={"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010100443-1__54184_360x.jpg?v=1645113115"}/>
                <p>10mm Palette Earrings | Neon Pink (14k)</p>
                <p>$12.00</p> 
              </div>
           </div>
           <div className={styles.viewbtn}>
            <button>View all</button>
           </div>
      </div>
    </>
  );
};

export default CartPage;
