import React from "react";
import styles from "./PaymentMain.module.css";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { GrCheckbox } from "react-icons/gr";
import { useState } from "react";
const PaymentMain = () => {
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
              <p>Cart</p>
            </div>
            <GoChevronRight style={{ marginTop: "15px" }} />
            <div>
              <p>Information</p>
            </div>
            <GoChevronRight style={{ marginTop: "15px" }} />
            <div>
              <p>Shipping</p>
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
                <p>Contact {getInput}</p>
              </div>
              <div className={styles.ChangesInfo1}>
                <p>Change</p>
              </div>
            </div>

            <div className={styles.firstInfoContainer}>
              <div className={styles.InfoShip}>
                <p>Ship to {getAddress}</p>
              </div>
              <div className={styles.ChangesInfo1} >
                <p>Change</p>
              </div>
            </div>

            <div className={styles.firstInfoContainer}>
              <div className={styles.InfoShip}>
                <p>Method</p>
              </div>
              <div className={styles.ChangesInfo1}>
                <p>Change</p>
              </div>
            </div>
          </div>
          <br />
          <br />



<br/>
          <div className={styles.PaymentGpay}>
            <div className={styles.GpayF}>
              <p>Payment</p>
            </div>

            <div className={styles.GpayF2}>
              <p> All transaction are secure and encrypted</p>
            </div>

            <div className={styles.CrediCard}>
              <div className={styles.MainCredit}>
                <div>
                  <input type="radio" />
                </div>
                <div className={styles.crediF}>
                  <p>Credit card</p>
                </div>
                <div className={styles.Maincompo}>
                  <div className={styles.VisaF}>
                    <img src="https://visualpharm.com/assets/980/Visa-595b40b85ba036ed117dad9d.svg" />
                  </div>
                  {/* <div className={styles.VisaF2} >
  <img src="https://visualpharm.com/assets/225/Mastercard-595b40b75ba036ed117d8605.svg"/>  

  </div> */}
                  {/* <div className={styles.VisaF3} >
  <img src="https://visualpharm.com/assets/406/American%20Express-595b40b65ba036ed117d3b65.svg"/>  

  </div> */}
                  {/* <div className={styles.VisaF4}>
    <img src="https://visualpharm.com/assets/117/Discover-595b40b65ba036ed117d3f4f.svg"/>
  </div> */}
                  {/* <div>and more</div> */}
                </div>
              </div>
              <br/>
              <div className={styles.InputCredFirst}>
                <div className={styles.InputCredit}>
                  <input type="text" name="number" placeholder="Card number" />
                </div>
                <br />
                <div className={styles.InputCredit2}>
                  <input type="text" name="name" placeholder="Name on card" />
                </div>
                <br />
                <div className={styles.InputCredit3}>
                  <input
                    type="text"
                    name="number"
                    placeholder="Expiration date (MM/YY)"
                  />
                  <input type="text" name="code" placeholder="Security code" />
                </div>
                <br />
              </div>

              <div className={styles.RadioForm12}>
                <div className={styles.Radioshippingpay}>
                  <input type="radio" />
                  <label> pay in full or in installments</label>
                </div>
                <hr></hr>
                <div className={styles.Radioshippingpay}>
                  <input type="radio" />
                  <label>PayPal</label>
                </div>
                <hr></hr>
                <div className={styles.Radioshippingpay}>
                  <input type="radio" />
                  <label>Afterpay</label>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className={styles.ShippingMethod}>
            <div className={styles.ShppingMP}>
              <p>Billings Address</p>
            </div>

            <div className={styles.BillngeAddP2}>
              <p>
                Select the address that matches your card or payment method.
              </p>
            </div>
          </div>

          <div className={styles.RadioForm2}>
            <div className={styles.Radioshipping}>
              <input type="radio" />
              <label>Same as shipping address</label>
            </div>
            <br></br>
            <hr></hr>
            <div>
              <input type="radio" />
              <label>Use a different billing address</label>
            </div>
          </div>
          <br />
          <div>
            <div className={styles.Rememberme}>
              <p>Remember Me</p>
            </div>

            <div className={styles.SaveInfor}>
              <GrCheckbox />
              <p> Save my information for a faster checkout</p>
            </div>
          </div>
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
              <button>Pay now</button>
            </div>
          </div>
        </div>

        <div className={styles.PaymentInfoSecond}>
          <div className={styles.SecondContainerT}>
            <div className={styles.ImageContainer}>
              <div>
                <img src="https://media.istockphoto.com/photos/alluring-woman-dressed-in-a-posh-jewelry-set-of-necklace-ring-and-picture-id1180931397?k=20&m=1180931397&s=612x612&w=0&h=f-0SQWW3Wxc8zh4HMLB2p_R4mYhLzHX3-aGrghKuRu4=" />
              </div>

              <div>
                <p>fern Bengal</p>
              </div>
            </div>
            <div className={styles.PriceContain}>
              <p> $68</p>
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

export default PaymentMain;
