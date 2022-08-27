import React from "react";
import styles from "./paymentInfor.module.css";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
const PaymentInfoPage = () => {
  return (
    <>
      <div className={styles.PaymentInfo}>
        <div className={styles.PaymentInfofirst}>
          <div className={styles.firstLhead}>
            <p>LOVODA</p>
          </div>

          <div className={styles.InfoSecondHead}>
            <div>
              <p>Cart</p>
            </div>
            <GoChevronRight style={{ marginTop: "15px" }} />
            <div>
              <p>Information</p>
            </div>
            <GoChevronRight style={{ marginTop: "15px" }} />
            <div>
              <p>Shopping</p>
            </div>
            <GoChevronRight style={{ marginTop: "15px" }} />
            <div>
              <p>Payment</p>
            </div>
            <GoChevronRight style={{ marginTop: "15px" }} />
          </div>
          <br />
          <div className={styles.ContactInfocontainer}>
            <div className={styles.firstInfoContainer}>
              <div>
                <p>Contact</p>
              </div>
              <div>
                <p>Change</p>
              </div>
            </div>

            <div className={styles.firstInfoContainer}>
              <div className={styles.InfoShip}>
                <p>Ship to</p>
              </div>
              <div>
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
            <div className={styles.RadioFormInfo}>
             <input type="radio"/>
             <div className={styles.OneRadio}>
             <p>Economy</p>
             </div>
             <div>
             <p>$55</p>

             </div>
            </div>
            <div className={styles.HeadRadio}>
             <p>5 to 8 business days</p>
            </div>
            <hr></hr>


            <div className={styles.RadioFormInfo}>
             <input type="radio"/>
             <div className={styles.TwoRadio}>
             <p>USPS Prority Mail</p>
             </div>
             <div>
             <p>$55</p>

             </div>
            </div>
            <div className={styles.HeadRadio}>
             <p>3 business days</p>
            </div>
            <hr></hr>

            <div className={styles.RadioFormInfo}>
             <input type="radio"/>
             <div className={styles.ThreeRadio}>
             <p>UPS* Ground</p>
             </div>
             <div>
             <p>$55</p>

             </div>
            </div>
            <div className={styles.HeadRadio}>
             <p>4 business days</p>
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
              <p>Return to Information</p>
            </div>
            <div className={styles.ContinueBtnPay}>
              <button>Continue to payment</button>
            </div>
          </div>
        </div>

        <div className={styles.PaymentInfoSecond}>
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

          <div>
              <input
                style={{ height: "34px", marginLeft: "33px", width: "55%" }}
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
                  width: "15%",
                  backgroundColor: "#BABBC5",
                  fontSize: "19px",
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

export default PaymentInfoPage;
