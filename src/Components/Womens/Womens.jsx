import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Cookies from 'js-cookie';
import './Womens.css'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Womens = () => {

  const [data, setData] = useState([])
  // const [show, setShow] = useState(null)
  const [loading, setLoading] = useState(false)
  const {addCart} = useCart()
   
  const handleData = async() => {
    setLoading(true)
       try{
           const response = await fetch("http://localhost:5000/womens")
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
      <h1>Womens</h1>
      <div className='bg-carousel'>
        <Carousel data-bs-theme="dark w-100 ">
          <Carousel.Item>
            <img
              className="d-block w-100 image"
              src="https://i.pinimg.com/originals/11/6f/32/116f324e50f4d5a37a8186367a8ed70b.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 image"
              src="https://i.pinimg.com/originals/73/a8/2e/73a82ecce46cb3f5a8f0ab7fb1b79e08.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 image"
              src="https://indiater.com/wp-content/uploads/2019/03/indiater-frame-fashion-women-ass.jpg"
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
        <img className='image' src= "https://img.lovepik.com/desgin_photo/45000/2341_detail.jpg!odetail650" alt='footer image' />
      </div>
    </div>
  )
}

export default Womens
