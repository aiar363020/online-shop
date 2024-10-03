import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./item.scss"
import axios from 'axios'


const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/advertisement"


function ItemProduct() {
  const {id} = useParams () ;
  const [data, setData] = useState ({})
  const [image, setImage] = useState (data.imageUrl)


  async function getProductBuId() {
    try{
      const res = await axios.get (`${API}/${id}`);
      setData(res.data);
      setImage(res.data.imageUrl)
      console.log(res);
      setData(res.data)
      
    }catch (error) {
      console.log(error);
    }
  }
  useEffect (() => {
    getProductBuId()
  }, [] )

  return (
    <div> <div className='item container'> 
    <div className='images'> 
      {
        data.imagesUrl?.map((item) => (
          <img onClick={() => setImage(item)} className='i' src={item} alt="" />
        ))}
    </div> 
  <div className='image'> 
    <img src={image} alt="" /> 
  </div> 
  <div className='text'> 
    <h1>Havic HV G-92 Gamepad</h1> 
    <h3>$192.00</h3> 
    <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p> 
    <div className='size'> 
        <p>Size:</p> 
{
  data.size?.map ((x, index) => (
    <span key={index}>{x}</span>
  ))
}

    </div> 
    <button>Buy Now</button> 
  </div> 
</div> 
 </div>
  )
}

export default ItemProduct
