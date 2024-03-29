import React from 'react'
import {AiOutlineRight,AiOutlineLeft} from 'react-icons/ai'
import {BsFillRecordCircleFill} from 'react-icons/bs'
import {RiVisaLine} from 'react-icons/ri'
import {GrAmex} from 'react-icons/gr'
import {FaCcDiscover} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './paymentSuccess.css'
import styles from '../../Pages/Swati/ShippingPage.module.css'
import { GoChevronRight } from 'react-icons/go'
// import styles from "./ShippingPage.module.css";

const PaymentSuccess = () => {

  const email = localStorage.getItem('emaildata')
  const address = localStorage.getItem('addressdata')






  return (
    <div >
      <div className='payment_success'  style={{display:"flex"
  }}>
         <div style={{width:"50%"}}>
          <br />
            <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/04122019_logo2.png?187" alt="logo" style={{height:"60px",width:"120px",marginLeft:"25%"}} />
{/* 

            <div style={{display:"flex"}}>
              <p style={{marginLeft:"24%",color:"blue",fontWeight:"lighter",fontSize:"15px"}}>Cart</p>
              <AiOutlineRight style={{marginTop:"3.5px",marginLeft:"10px"}}/>
              <p style={{marginLeft:"10px",color:"blue",fontWeight:"lighter",fontSize:"15px"}}>
                <Link to={'/cart/information'}>
                Information
                </Link>
                   </p>
              <AiOutlineRight style={{marginTop:"3.5px",marginLeft:"10px"}}/>
              <p style={{marginLeft:"10px",color:"blue",fontWeight:"lighter",fontSize:"15px"}}>Shipping  </p>
              <AiOutlineRight style={{marginTop:"3.5px",marginLeft:"10px"}}/>
              <p style={{marginLeft:"10px",fontWeight:"lighter",fontSize:"15px"}}><b>Payment  </b></p>
              
            </div> */}



            {/* start */}


            <div style={{marginLeft:"200px"}} className={styles.InfoSecondHead}>
          <div>
              <Link to={'/cart'}>
              <p>Cart</p>
              </Link>
            <GoChevronRight   />
            </div>
            <div>
              <Link to={'/cart/information'}>
              <p>Information</p>
              </Link>
            <GoChevronRight   />
            </div>
            <div>
              <Link to={'/cart/information/shipping'}>
              <p>Shipping</p>
              </Link>
            <GoChevronRight  />
            </div>
            <div>
            <Link to={'/cart/information/shipping/payment'}>
              <p>Payment</p>
            </Link>
            <GoChevronRight  />
            </div>
          </div>
 





            {/* end */}



            <br />
            <div style={{marginLeft:"24%",border:"1px solid black",width:"70%",borderRadius:"5px"}}>
              <div style={{display:"flex",width:"90%",border:"1px solid black",margin:"auto",borderTop:"none",borderRight:"none",borderLeft:"none"}}>
                <p style={{fontWeight:"lighter",padding:"6px"}}>Contact</p>
                <p style={{marginLeft:"40px",padding:"6px"}}>{email}</p>
                <p style={{marginLeft:"100px",color:"blue",fontWeight:"lighter",padding:"6px"}}>Change</p>
              </div>
              <div style={{display:"flex",width:"90%",border:"1px solid black",margin:"auto",borderTop:"none",borderRight:"none",borderLeft:"none"}}>
                <p style={{fontWeight:"lighter",padding:"6px"}}>Ship to</p>
                <p style={{marginLeft:"40px",padding:"6px"}}>{address}</p>
                <p style={{marginLeft:"155px",color:"blue",fontWeight:"lighter",padding:"6px"}}>Change</p>
              </div>
              <div style={{display:"flex",width:"90%",border:"1px solid black",margin:"auto",borderTop:"none",borderRight:"none",borderLeft:"none",borderBottom:"none"}}>
                <p style={{fontWeight:"lighter",padding:"6px"}}>Method</p>
                <p style={{marginLeft:"40px",padding:"6px"}}>Economy · <b>$4.00</b></p>
              
              </div>
              
              
              
            </div>
            <br />
            <p style={{marginLeft:"24%",fontSize:"20px"}}>Payment</p>
            <p style={{marginLeft:"24%",fontSize:"15px"}}>All transactions are secure and encrypted.</p>
            <br />
            <div style={{marginLeft:"24%",border:"1px solid black",width:"70%",borderRadius:"5px"}}>
              <div style={{display:"flex"}}>
                <div style={{display:"flex"}}>
                  <BsFillRecordCircleFill style={{color:"blue",padding:"10px"}}/>
                  <p style={{marginLeft:"5px",padding:"6px"}}>Credit card</p>
                </div>
                

                <div style={{display:"flex",marginLeft:"150px"}}>
                 <RiVisaLine style={{fontSize:"35px",color:"blue"}}/>
                 <GrAmex style={{fontSize:"38px",color:"blue",marginLeft:"12px"}}/>
                 <FaCcDiscover style={{fontSize:"38px",color:"blue",marginLeft:"12px"}}/>
                 <p style={{fontWeight:"lighter",fontSize:"12px",padding:"8px"}}>and more...</p>
                </div>
              </div>
              <hr/>
              <br />
              <input type="number" placeholder='Card number'style={{height:"40px",width:"90%",marginLeft:"10px",borderRadius:"5px"}} />
              <input type="text" placeholder='Name on card'style={{height:"40px",width:"90%",marginLeft:"10px",borderRadius:"5px",marginTop:"5px"}} />
              <input type="text" placeholder='Expiration date (MM/YY)'style={{height:"40px",width:"40%",marginLeft:"10px",borderRadius:"5px",marginTop:"5px"}} />
              <input type="text" placeholder='Secutity code'style={{height:"40px",width:"40%",marginLeft:"20px",borderRadius:"5px",marginTop:"5px"}} />
              
              <hr style={{marginTop:"15px"}}/>
              <div style={{display:"flex"}}>
                <br />
                <br />
              <input type="radio" name='radio' style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px"}}/>
               <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/checkout/offsite-gateway-logos/shopify_installments@2x-d7520ea8e57828208454f0290d5ae8e4269bda53ac0fa85f8329da8c081e7557.png" alt="shoppay" style={{height:"30px",marginTop:"5px",marginLeft:"10px"}}/>
              </div>
              <hr />
              
              <div style={{display:"flex"}}>
              <input type="radio" name='radio' style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px",padding:"10px"}}/>
               <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/checkout/offsite-gateway-logos/paypal@2x-768388b0667bef1aa9a7cf02fa1cc2184c2915a90d4cdd62dde223f74f2acbfc.png" alt="shoppay" style={{height:"30px",marginTop:"5px",marginLeft:"10px"}}/>
              </div>
              <hr />
              <div style={{display:"flex"}}>
              <input type="radio"  name='radio' style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px",padding:"10px"}}/>
               <p style={{marginLeft:"10px",padding:"5px"}}>Afterpay</p>
              </div>

            </div>
           <br />
           <br />
           <p style={{marginLeft:"24%",fontSize:"20px"}}>Billing address</p>
            <p style={{marginLeft:"24%",fontSize:"15px"}}>Select the address that matches your card or payment method.</p>
            <br />
            <div style={{marginLeft:"24%",border:"1px solid black",width:"70%",borderRadius:"5px"}}>
              <div style={{display:"flex"}}>
              <input type="radio"  name='data' style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px",padding:"10px"}}/>
               <p style={{marginLeft:"10px",padding:"5px"}}>Same as shipping address</p>
              </div>
               <hr />
               <div style={{display:"flex"}}>
              <input type="radio"  name='data' style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px",padding:"10px"}}/>
               <p style={{marginLeft:"10px",padding:"5px"}}>Use a different billing address</p>
              </div>
            </div>
            <br />
            <br />
            <p style={{marginLeft:"24%",fontSize:"20px"}}>Remember me</p>
            <br />
            <div style={{marginLeft:"24%",border:"1px solid black",width:"70%",borderRadius:"5px"}}>
              <div style={{display:"flex"}}>
              <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px",padding:"10px"}}/>
               <p style={{marginLeft:"10px",padding:"5px"}}>Save my information for a faster checkout</p>
              </div>
            </div>
         <br />
         <br />
         <div style={{display:"flex",marginLeft:"24%"}}>
          <AiOutlineLeft style={{marginTop:"4px",color:"blue"}}/>
          <Link to={'/cart/information/shipping'}>
          <p style={{color:"blue"}}>Return to shipping</p>
          </Link>
          <Link to={'/cart/information/shipping/payment/order_successful'}>
          <button style={{marginLeft:"200px",height:"65px",width:"100px",backgroundColor:"black",color:"white",borderRadius:"5px"}}>Pay now</button>
          </Link>
          <br />
          <br />
         
         </div>
         <br />
         <hr style={{width:"71%",marginLeft:"24%"}}/>
       <div style={{marginLeft:"24%",display:"flex",gap:"15px"}}>
            <p style={{color:"blue"}}>Refund policy</p>
            <p style={{color:"blue"}}>Shipping policy</p>
            <p style={{color:"blue"}}>Privacy policy</p>
            <p style={{color:"blue"}}>Terms of service</p>
       </div>
         </div>
         <div>
          




          {/* start */}

          <div style={{width:"700px",padding:"15px 0"}} className={styles.PaymentInfoSecond}>
          <div className={styles.SecondContainerT}>
            <div className={styles.ImageContainer}>
              <div>
                <img src="https://media.istockphoto.com/photos/alluring-woman-dressed-in-a-posh-jewelry-set-of-necklace-ring-and-picture-id1180931397?k=20&m=1180931397&s=612x612&w=0&h=f-0SQWW3Wxc8zh4HMLB2p_R4mYhLzHX3-aGrghKuRu4=" />
                </div>

               <div><p>fern Bengal</p></div> 
            </div>
            <div className={styles.PriceContain}>
            <p>            $68
</p>
            </div>
          </div>

          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <input
              style={{ height: "35px", 
              marginLeft: "33px",
               width: "45%" }}
              type="text"
              name="name"
              placeholder="Gift card or discount code"
            />

            <input
              style={{
                height: "35px",
                border: "none",
                borderRadius: "5%",
                marginLeft: "8px",
                marginBottom:"45px",
                width: "15%",
                backgroundColor: "#BABBC5",
                fontSize: "16px",
                color: "white ",
              }}
              type="submit"
              value="Apply"
            />
          </div>
            <br></br>
            <div className={styles.ContainerLt}>
            <hr></hr>
            <div className={styles.ContainerTypes}>
            
              <div>
              <p>Subtotal</p>
              </div>
              <div className={styles.ContainerT2}>
              <p>$70</p>
              </div>
              
            </div>

            <div className={styles.ContainerTypes}>
              <div>
              <p>Shipping</p>
              </div>
              <div className={styles.ContainerT2}>
              <p>$70</p>
              </div>
            </div>
            <hr></hr>
            <div className={styles.ContainerTypes}>
            
            <div>
            <p>Total</p>
            </div>
            <div className={styles.ContainerT3}>
            <p>$140</p>
            </div>
            
          </div>
        </div>
        </div>

          {/* end */}







         </div>
      </div>
  
    </div>
  )
}

export default PaymentSuccess