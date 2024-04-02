import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Cookies from 'js-cookie';
import './Mens.css'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Mens = () => {
  const [data, setData] = useState([])
  // const [show, setShow] = useState(null)
  const [loading, setLoading] = useState(false)

  const {addCart} = useCart()

  const handleData = async () => {
    setLoading(true)
    try {
      const response = await fetch("http://localhost:5000/mens")
      const res = await response.json()
      setData(res)
    }
    catch (e) {
      console.log(e)
    }
    setLoading(false)
  }

  const usenavigate = useNavigate()

  useEffect(() => {
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
      {loading && <div><h1>Loading.....</h1></div>}
      <h1>Mens</h1>
      <div className='bg-carousel'>
        <Carousel data-bs-theme="dark w-100 ">
          <Carousel.Item >
            <img
              className="d-block w-100 image"
              src="https://templates.simplified.co/thumb/3446e660-7af3-4ff6-86ce-755afcde8fcd.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 image"
              src="https://cdn.denimandcloth.com.au/content/uploads/2014/11/24131625/mens.banner.sale_.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 image"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7bb49d2a-8588-41e7-9081-342339bfb37d/ddl95sj-4f2dc038-52f4-4369-8ce2-977c63d427eb.jpg/v1/fill/w_1024,h_284,q_75,strp/men_s_fashion__banner_by_asimcarnage_ddl95sj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdiYjQ5ZDJhLTg1ODgtNDFlNy05MDgxLTM0MjMzOWJmYjM3ZFwvZGRsOTVzai00ZjJkYzAzOC01MmY0LTQzNjktOGNlMi05NzdjNjNkNDI3ZWIuanBnIiwiaGVpZ2h0IjoiPD0yODQiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC83YmI0OWQyYS04NTg4LTQxZTctOTA4MS0zNDIzMzliZmIzN2RcL2FzaW1jYXJuYWdlLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.ktKYKsraKd0YmHxi2mHLJfVcWFbkYW687jM82VjT2sU"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='bg-card'>
        {data.map((item) => {
          return (
            <div className='card'>
              <div>
                <h5>{item.title}</h5>
                <p className='para'>{item.description}</p>
                <p className='price'>Price: {item.price}</p>
                <button onClick={() => addCart(item)} className='button'>Add</button>
              </div>
              <img className='img' src={item.imageUrl} alt="Image" />
            </div>
          )
        })}
        {/* {show && <div className='container'>
          <div className='model'>
            <h6>Title:{show.title}</h6>
            <p>Description: {show.description}</p>
            <p>Price: {show.price}</p>
            <img className='img' src={show.imageUrl} />
            <button className='btn' onClick={handleClose}>Close</button>
          </div>
        </div>} */}
      </div>
      <div className='footer'>
        <img className='image' src= "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/men%27s-fashion-template-design-2bf4c554ccc9a423db15db6e58f770b5_screen.jpg?ts=1687028854" alt='footer image' />
      </div>
    </div>
  )
}

export default Mens