import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const OrderComplete = () => {
    let [data,setData]=useState("https://cutewallpaper.org/21/loading-gif-transparent-background/UCSUR-PittCSUR-University-of-Pittsburgh-Research-Center.gif")
    let [msg,setMsg]=useState("Your Payment Is Pending...")
    let [thank,setThank]=useState("")
let navigate=useNavigate()

    useEffect(()=>{
        let image=setTimeout(()=>{
            setData("https://thumbs.dreamstime.com/b/confirmation-approval-order-operation-payment-successful-completion-girl-confirms-business-success-man-hand-shows-class-239104068.jpg")
            setMsg("Thankyou For Your Payment.")
            setThank("Order Successful")
            let data=setTimeout(()=>{
             
                 navigate('/')
                 
            },3000)
            return ()=>{
              clearTimeout(data)
            }
        },5000)
        return ()=> {
            clearTimeout(image)
        }
    },[])


  return (
    <div style={{marginLeft:"33%",height:"500px",width:"500px",marginBottom:"500px"}}>
       <img src={data} alt="payment" style={{height:"100%",width:"100%"}}/>
     <h1>{thank}.</h1>
    <h1 >{msg}</h1>
       
    </div>
  )
}

export default OrderComplete