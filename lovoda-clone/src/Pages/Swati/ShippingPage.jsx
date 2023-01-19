import React from "react";
import styles from "./ShippingPage.module.css";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { Link } from "react-router-dom";
const ShippingPage = () => {
  const getInput= localStorage.getItem("emaildata")
  console.log(getInput)

  const getAddress = localStorage.getItem("addressdata")
  console.log(getAddress)
 
  return (
    <>
      <div className={styles.PaymentInfo}>
        <div className={styles.PaymentInfofirst}>
          <div className={styles.firstLhead}>
            <p>LOVODA</p>
          </div>
          <div className={styles.InfoSecondHead}>
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
   
          <br />
          <div className={styles.ContactInfocontainer}>
            <div className={styles.firstInfoContainer}>
              <div className={styles.Contactinfo1}>
                <p>Contact {getInput}</p> 
              </div>
              <div className={styles.Changeinfo1}>
                <p>Change</p>
              </div>
            </div>

            <div className={styles.firstInfoContainer}>
              <div className={styles.InfoShip}>
                <p>Ship to {getAddress}</p>
              </div>
              <div className={styles.Changeinfo}>
                <p>Change</p>
              </div>
            </div>
          </div>

          <div className={styles.ShippingMethod}>
            <div className={styles.ShppingMP}>
              <p>Shipping method</p>
            </div>
          </div>
           <div className={styles.radioInfoForm}>
            <div style={{height:"50px" ,display:"flex",flexDirection:"column" }}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"90%"}}>
<div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
<input style={{width:"20px"}} type="radio" name="data"/>
<span style={{fontSize:"14px"}}>Economy</span>

</div>
<div style={{marginRight:"-50px"}}>
$55
</div>
    </div>
<div style={{margin:"-15px 0 0 15px"}}>
5 to 8 business days
</div>
 </div>
            <hr></hr>
<div style={{height:"50px" ,display:"flex",flexDirection:"column" }}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"90%"}}>
<div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
<input style={{width:"20px"}} type="radio" name="data"/>
<span style={{fontSize:"14px"}}>USPS prority mail</span>

</div>
<div style={{marginRight:"-50px"}}>
$55
</div>
    </div>
<div style={{margin:"-15px 0 0 15px"}}>
3 business days
</div>
 </div>
 <hr />
 <div style={{height:"50px" ,display:"flex",flexDirection:"column" }}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"90%"}}>
<div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
<input style={{width:"20px"}} type="radio" name="data"/>
<span style={{fontSize:"14px"}}>UPS* Ground</span>

</div>
<div style={{marginRight:"-50px"}}>
$55
</div>
    </div>
<div style={{margin:"-15px 0 5px 15px"}}>
4 business days
</div>
 </div>
      </div> 
          <br/>
          <div className={styles.ContinuePayButt}>
            <div className={styles.ReturnTocartf}>
              <GoChevronLeft
                style={{
                  marginLeft: "1%",
                  fontSize: "21px",
                  marginTop: "6%",
                }}
              />

              <Link to='/cart/information'>
              <p>Return to Information</p>
              </Link>
            </div>
            <div className={styles.ContinueBtnPay}>
              <Link to={'/cart/information/shipping/payment'}>
              <button>Continue to payment</button>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.PaymentInfoSecond}>
          <div className={styles.SecondContainerT}>
            <div className={styles.ImageContainer}>
              <div>
                <img src="https://media.istockphoto.com/photos/alluring-woman-dressed-in-a-posh-jewelry-set-of-necklace-ring-and-picture-id1180931397?k=20&m=1180931397&s=612x612&w=0&h=f-0SQWW3Wxc8zh4HMLB2p_R4mYhLzHX3-aGrghKuRu4=" alt="random image"/>
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
      </div>
    </>
  );
};

export default ShippingPage;
