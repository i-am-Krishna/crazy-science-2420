import styles from "./Payment.module.css";
import { GoChevronRight } from "react-icons/go";
import React from "react";
import { BiCheckbox } from "react-icons/bi";
import { GoChevronDown } from "react-icons/go";
const PaymentPage = () => {
  return (
    <>
      <div className={styles.PaymentHead}>
        <div className={styles.firstHead}>
          <h1>LOVODA</h1>
          <div className={styles.PaymentSecondHead}>
            <p>Cart</p>
            <GoChevronRight style={{ marginTop: "17px" }} />

            <p>Information</p>
            <GoChevronRight style={{ marginTop: "17px" }} />

            <p>Shopping</p>
            <GoChevronRight style={{ marginTop: "17px" }} />

            <p>Payment</p>
            <GoChevronRight style={{ marginTop: "17px" }} />
          </div>
          <br />
          {/* <div className={styles.form}>
            <div className={styles.formFirst}>
              <div>
                <p> Contact Information</p>
              </div>
              <div>
                <p>Already have an account? Log in</p>
              </div>
            </div>
            <br />
            <form style={{ border: "0px solid red", width: "110%" }}>
            <input
                style={{ width:"594px", height: "40px" }}
                type="text"
                name="name"
                placeholder=" Email or mobile phone number"
              /> 
              <br />
              <div className={styles.Checkbox}>
                <BiCheckbox style={{ marginTop: "7px", fontSize: "20px" }} />
                <p> Email me with news and address</p>
              </div>
              <div>
              <div className={styles.Shipping}>
                <p> Shipping Address</p>
              </div>
              <input
                style={{ width:"594px", height: "28px" }}
                type="text"
                name="name"
                placeholder=" Email or mobile phone number"
              /> 
              <GoChevronDown style={{fontSize:"17px", marginTop:"5%", marginLeft: "-28px", border:"0px solid black"}}/>
              <br/><br/>
              <div>
              <input  style={{ width:"282px", height: "23px"}} type="text" name="firstname" /> 
              <input  style={{ width:"290px",  height: "23px", marginLeft:"12px"}} type="text" name="firstname" />
              <br/>
              <br/>

              <input
                style={{ width:"594px", height: "28px" }}
                type="text"
                name="name"
                placeholder=" Email or mobile phone number"
              /> 
              <br/>
              <br/>
             <input
                style={{ width:"594px", height: "28px" }}
                type="text"
                name="name"
                placeholder=" Email or mobile phone number"
              /> 
              <br/>
              <br/>
              <input
                style={{ width:"594px", height: "28px" }}
                type="text"
                name="name"
                placeholder=" Email or mobile phone number"
              /> 
              <br/>
              <br/>
              <input
                style={{ width:"20px", height: "28px" }}
                type="text"
                name="name"
                placeholder=" Email or mobile phone number"
              /> 
               </div>
              </div>
            </form>
          </div> */}
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
        <input style={{height:"30px" , marginLeft:"58px", width:"65.1%"}}/>
        <br/>
        <br/>
        <div className={styles.ContatCheck} >
        <BiCheckbox />
        <p>Email me with news and offers</p>
        </div>
        <div className={styles.contactPort}>
        <input style={{height:"30px", marginLeft:"55px" ,width:"31%"  }}/>

        <input style={{height:"30px",  marginLeft:"20px" ,width:"30%" }}/>
        <br/>
        <br/>

        <input style={{height:"30px" , marginLeft:"58px", width:"65.1%"}}/>
        <br/>
        <br/>
        <input style={{height:"30px" , marginLeft:"58px", width:"65.1%"}}/>
        <br/>        <br/> 

        <input style={{height:"30px" , marginLeft:"58px", width:"65.1%"}}/>
        <br/> 
        <br/> 

        <div className={styles.contactPort2}>
        <input style={{height:"30px", marginLeft:"53px" ,width:"18%"  }}/>

          <input style={{height:"30px",  marginLeft:"20px" ,width:"22%" }}/>
          <input style={{height:"30px",  marginLeft:"20px" ,width:"18%" }}/>

        </div>
        <br/>
        <input style={{height:"30px" , marginLeft:"58px", width:"65.1%"}}/>

         
        </div>
        </div>
       

        </div>
        </div>

        <div className={styles.secondHead}>
          <h1>Hello</h1>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
