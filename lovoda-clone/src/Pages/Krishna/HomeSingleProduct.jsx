import React from 'react'

const HomeSingleProduct = () => {



    const singleP = async()=>{
        let res = await axios.get(`https://lovoda-backend.vercel.app/api/home/${id}`)
        let data = res.data;
        console.log(data)
        return data;
       }
       singleP();
  return (
    <div>HomeSingleProduct</div>
  )
}

export default HomeSingleProduct