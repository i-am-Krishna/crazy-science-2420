import styles from "./Payment.module.css";
import { GoChevronRight } from "react-icons/go";
import React from "react";
import { BiCheckbox } from "react-icons/bi";
import { GoChevronLeft } from "react-icons/go";
import { GoQuestion } from "react-icons/go";
import { Link } from "react-router-dom";
const PaymentPage = () => {
  const options = [
    {
      label: "Country/region",
      value: "country/region",
    },
    {
      label: "United State",
      value: "United State",
    },
  ];
  const array = [
    {
      label: "State",
      value: "State",
    },
    {
      label: "hawaii",
      value: "Hawaii",
    },
    {
      label: "alabama",
      value: "Alabama",
    },    {
      label: "alaska",
      value: "Alaska",
    },    {
      label: "american Samoa",
      value: "American Samoa",
    },    {
      label: "arizona",
      value: "Arizona",
    },    {
      label: "arkansas",
      value: "Arkansas",
    },    {
      label: "calorado",
      value: "Calorado",
    },    {
      label: "connecticut",
      value: "Connecticut",
    },    {
      label: "indiana",
      value: "Indiana",
    },    {
      label: "flowrida",
      value: "Flowrida",
    },
  ];

  return (
    <>
      <div className={styles.PaymentHead}>
        <div className={styles.firstHead}>
          <h1>LOVODA</h1>
          <div className={styles.PaymentSecondHead}>
            <div style={{display:"flex",justifyContent:"center"  , alignItems:"center"}}>
            <p>Cart</p>
            <GoChevronRight style={{paddingTop:"4px"}}/>
            </div>

            <div style={{display:"flex",justifyContent:"center"  ,width:"120px", alignItems:"center"}}>
            <p>Information</p>
            <GoChevronRight style={{paddingTop:"4px"}}/>
            </div>
            
            
            <div style={{display:"flex",justifyContent:"center" ,width:"120px" , alignItems:"center"}}>
            <p>Shopping</p>
            <GoChevronRight style={{paddingTop:"4px"}}/>
            </div>

            <div style={{display:"flex",justifyContent:"center" ,width:"120px" , alignItems:"center"}}>
            <p>Payment</p>
            <GoChevronRight style={{paddingTop:"4px"}}/>
            </div>

                     </div>
          <br />

          <div className={styles.btn}>
            <div className={styles.btn2}>
           
              <button>
                <img
                  src={
                    "https://cdn.shopify.com/s/files/1/0065/7650/4896/articles/Screen_Shot_2021-07-14_at_11.26.52_AM_540x.png?v=1626287226"
                  }
                />
              </button>
            </div>
            <div className={styles.btn3}>
              <button>
                <img
                  src={
                    "https://newsroom.paypal-corp.com/image/Library_PayPal.png"
                  }
                />
              </button>
            </div>
            <div className={styles.btn5}>
              <button>
                <img
                  src={
                    "https://d2csxpduxe849s.cloudfront.net/media/F44207E3-1DDE-4798-B0FCC94F6227FCB7/5178B7EE-CB0A-4958-8639A1B0028E2F56/webimage-10B13DE9-ABD9-4318-B33EF188C9F552F5.jpg"
                  }
                />
              </button>
            </div>
          </div>
          <div className={styles.hr}>
          </div>
          <div className={styles.Information}>
            <div className={styles.ContactInfo}>
              <div className={styles.ContactInfoTwo}>
                <p>Contact information</p>
              </div>

              <div className={styles.ContactInfoThree}>
                <p>Already have an account? Log in</p>
              </div>
            </div>
            <div className={styles.ContactInput}>
              <input
                style={{ height: "30px", marginLeft: "58px", width: "65.1%" }}
                type="text"
                email="email"
                placeholder="Email or mobile phone number"
              />
              <br />
              <br />
              <div className={styles.ContactChecks}>
                <BiCheckbox style={{ fontSize: "19px", marginTop: "3.8%" }} />
                <p>Email me with news and offers</p>
              </div>
              <div className={styles.ShippingF}>
                <p>Shipping Address</p>
              </div>
                          <div className={styles.SelectContainer}>
                <select>
                  {options.map((option) => (
                    <option value={option.value}>{option.value}</option>
                  ))}
                </select>
              </div>
              
              <br />
              <div className={styles.contactPort}>
                <input
                  style={{ height: "30px", marginLeft: "55px", width: "31%" }}
                  type="text"
                  name="name"
                  placeholder="First Name"
                />
                <input
                  style={{ height: "30px", marginLeft: "20px", width: "30%" }}
                  type="text"
                  name="name"
                  placeholder="Last Name"
                />
                <br />
                <br />
                <input
                  style={{ height: "30px", marginLeft: "58px", width: "65.1%" }}
                  type="text"
                  name="name"
                  placeholder="Company (optional)"
                />
                <br />
                <br />
                <input
                  style={{ height: "30px", marginLeft: "58px", width: "65.1%" }}
                  type="text"
                  name="name"
                  placeholder="Address"
                />
                <br /> <br />
                <input
                  style={{ height: "30px", marginLeft: "58px", width: "65.1%" }}
                  type="text"
                  name="name"
                  placeholder="Apartment, suite, etc. (optional)"
                />
                <br />
                <br />
                <div className={styles.contactPort2}>
                  <input
                    style={{ height: "30px", marginLeft: "53px", width: "19%" }}
                    type="text"
                    name="name"
                    placeholder="City"
                  />

                  <select className={styles.SelectType}>
                    {array.map((arr) => (
                      <option value={arr.value} placeholder="state">
                        {arr.value}
                      </option>
                    ))}
                  </select>
                  <input
                    style={{
                      height: "30px",
                      marginLeft: "18px",
                      width: "20.7%",
                    }}
                    type="number"
                    placeholder="ZIP code"
                  />
                </div>
                <br />
                <input
                  style={{ height: "30px", marginLeft: "58px", width: "65.1%" }}
                  type="number"
                  name="phone"
                  placeholder="Phone"
                />
                <GoQuestion style={{ marginLeft: "-2.5%", fontSize: "16px" }} />
                <br />
                <br />

                <div className={styles.ReturnCart}>

                  <GoChevronLeft
                    style={{
                      marginLeft: "20%",
                      fontSize: "21px",
                      marginTop: "1.2%",
                    }}
                  />
                  <p>
                      <Link to='/cart' style={{textDecoration:"none"}} >
                 Return to Cart 
                  </Link>
                  </p>
                  <button>Continue to Shipping</button>
                </div>
                <br />
              </div>
              <div className={styles.LastFoot}>
                <p>Refund policy </p>
                <p>Shipping policy</p>
                <p> Privacy policy</p>
                <p>Terms of service</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.secondHead}>
          <div className={styles.secondHeadTwo}>
            <h1>Hello</h1>

            <div>
              <input
                style={{ height: "34px", marginLeft: "53px", width: "50%" }}
                type="text"
                name="name"
                placeholder="Gift card or discount code"
              />

              <input
                style={{
                  height: "38px",
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
