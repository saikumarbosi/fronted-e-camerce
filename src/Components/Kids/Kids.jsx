import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Cookies from 'js-cookie';
import './Kids.css'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Kides = () => {

  const [data, setData] = useState([])
  // const [show, setShow] = useState(null)
  const [loading, setLoading] = useState(false)
  const {addCart} = useCart()
   
  const handleData = async() => {
    setLoading(true)
       try{
           const response = await fetch("http://localhost:5000/kids")
           const res = await response.json()
           setData(res)
       }
       catch(e){
        console.log(e)
       }
       setLoading(false)
  }
  const usenavigate = useNavigate()
  useEffect(()=> {
    handleData()
    const jwtToken = Cookies.get('jwt')
    if(jwtToken === undefined){
      usenavigate('/login')
    }
  }, [])

  // const handleOutput = (list) => {
  //   setShow(list)
  // }

  // const handleClose = () => {
  //   setShow(null)
  // }

  return (
    <div className='bg-home'>
      { loading && <div><h1>Loading.....</h1></div>}
      <h1>Kids</h1>
      <div className='bg-carousel'>
        <Carousel data-bs-theme="dark w-100 ">
          <Carousel.Item>
            <img
              className="d-block w-100 image"
              src="https://content.wepik.com/statics/38800710/preview-page0.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 image"
              src="https://i.pinimg.com/736x/77/35/2b/77352b96bb8815adb5141d63d33ecb5a.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 image"
              src="https://miro.medium.com/v2/resize:fit:1400/1*Rd2VA6n0ZrfGGF4fpcbaeQ.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='bg-card'>
      {data.map((item) => {
        return(
          <div className='card'>
            <div>
            <h5>{item.title}</h5>
            <p className='para'>{item.description}</p>
            <p className='price'>Price: {item.price}</p>
            <button onClick={() => addCart(item)} className='button'>Add</button>
            </div>
            <img className='img' src = {item.imageUrl} alt="Image" />
          </div>
        )
      })}
      {/* {show && <div className='container'>
        <div className='model'>
          <h6>Title:{show.title}</h6>
          <p>Description: {show.description}</p>
          <p>Price: {show.price}</p>
          <img className='img' src = {show.imageUrl} />
          <button className='btn' onClick={handleClose}>Close</button>
        </div>
      </div>} */}
      </div>
      <div className='footer'>
        <img className='image' src= "https://img.freepik.com/free-vector/flat-summer-sale-banner-template-with-photo_23-2148960737.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705017600&semt=ais" alt='footer image' />
      </div>
    </div>
  )
}

export default Kides
