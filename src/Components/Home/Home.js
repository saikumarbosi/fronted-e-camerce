import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"
// import Cookies from 'js-cookie';
// import { useNavigate } from 'react-router-dom';


const Home = () => {

    // const usenavigate = useNavigate()

    // const jwtToken = Cookies.remove("jwt")
    
    // useEffect(() => {
    //     if(jwtToken === undefined){
    //         usenavigate('/login')
    //     }
    // })

    return (
        <div className='bg-home'>
            <h1>Home</h1>
            <Carousel data-bs-theme="dark" className='bg-img'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src="https://img.freepik.com/free-photo/photocomposition-horizontal-shopping-banner-with-woman-big-smartphone_23-2151201773.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src="https://img.freepik.com/free-psd/horizontal-banner-template-big-sale-with-woman-shopping-bags_23-2148786755.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src="https://c8.alamy.com/comp/2C94609/online-shopping-web-banner-template-design-flat-design-style-online-shopping-web-banner-vector-illustration-design-2C94609.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div>
                <h4>Beauty, Food, Toys & more...</h4>
                <div className='img-container'>
                <div className='img-card'>
                    <img className='img' src = "https://media.istockphoto.com/id/476844832/photo/hulk-action-figure.jpg?s=612x612&w=0&k=20&c=J3b8TvEO02USYUEvOwd5vqyCTLk4HMMcFlYvyO5SRdA=" alt='image' />
                    <p>Best of Action Toys</p>
                    <p>Up to 70% Off</p>
                </div>
                <div className='img-card'>
                    <img className='img' src = "https://www.shutterstock.com/image-photo/kuala-lumpur-malaysia-october-6-260nw-1197291274.jpg" alt='image' />
                    <p>Best of Action Toys</p>
                    <p>Up to 70% Off</p>
                </div>
                <div className='img-card'>
                    <img className='img' src = "https://media.istockphoto.com/id/476844832/photo/hulk-action-figure.jpg?s=612x612&w=0&k=20&c=J3b8TvEO02USYUEvOwd5vqyCTLk4HMMcFlYvyO5SRdA=" alt='image' />
                    <p>Best of Action Toys</p>
                    <p>Up to 70% Off</p>
                </div>
                <div className='img-card'>
                    <img className='img' src = "https://media.istockphoto.com/id/476844832/photo/hulk-action-figure.jpg?s=612x612&w=0&k=20&c=J3b8TvEO02USYUEvOwd5vqyCTLk4HMMcFlYvyO5SRdA=" alt='image' />
                    <p>Best of Action Toys</p>
                    <p>Up to 70% Off</p>
                </div>
                <div className='img-card'>
                    <img className='img' src = "https://media.istockphoto.com/id/476844832/photo/hulk-action-figure.jpg?s=612x612&w=0&k=20&c=J3b8TvEO02USYUEvOwd5vqyCTLk4HMMcFlYvyO5SRdA=" alt='image' />
                    <p>Best of Action Toys</p>
                    <p>Up to 70% Off</p>
                </div>
                <div className='img-card'>
                    <img className='img' src = "https://media.istockphoto.com/id/476844832/photo/hulk-action-figure.jpg?s=612x612&w=0&k=20&c=J3b8TvEO02USYUEvOwd5vqyCTLk4HMMcFlYvyO5SRdA=" alt='image' />
                    <p>Best of Action Toys</p>
                    <p>Up to 70% Off</p>
                </div>
                <div className='img-card'>
                    <img className='img' src = "https://media.istockphoto.com/id/476844832/photo/hulk-action-figure.jpg?s=612x612&w=0&k=20&c=J3b8TvEO02USYUEvOwd5vqyCTLk4HMMcFlYvyO5SRdA=" alt='image' />
                    <p>Best of Action Toys</p>
                    <p>Up to 70% Off</p>
                </div>
                <div className='img-card'>
                    <img className='img' src = "https://media.istockphoto.com/id/476844832/photo/hulk-action-figure.jpg?s=612x612&w=0&k=20&c=J3b8TvEO02USYUEvOwd5vqyCTLk4HMMcFlYvyO5SRdA=" alt='image' />
                    <p>Best of Action Toys</p>
                    <p>Up to 70% Off</p>
                </div>
                <div className='img-card'>
                    <img className='img' src = "https://media.istockphoto.com/id/476844832/photo/hulk-action-figure.jpg?s=612x612&w=0&k=20&c=J3b8TvEO02USYUEvOwd5vqyCTLk4HMMcFlYvyO5SRdA=" alt='image' />
                    <p>Best of Action Toys</p>
                    <p>Up to 70% Off</p>
                </div>
                <div className='img-card'>
                    <img className='img' src = "https://media.istockphoto.com/id/476844832/photo/hulk-action-figure.jpg?s=612x612&w=0&k=20&c=J3b8TvEO02USYUEvOwd5vqyCTLk4HMMcFlYvyO5SRdA=" alt='image' />
                    <p>Best of Action Toys</p>
                    <p>Up to 70% Off</p>
                </div>
                <div className='img-card'>
                    <img className='img' src = "https://media.istockphoto.com/id/476844832/photo/hulk-action-figure.jpg?s=612x612&w=0&k=20&c=J3b8TvEO02USYUEvOwd5vqyCTLk4HMMcFlYvyO5SRdA=" alt='image' />
                    <p>Best of Action Toys</p>
                    <p>Up to 70% Off</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home 