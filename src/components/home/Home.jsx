import React from 'react'
import "./Home.css"
import Product from "../products/Product"

const Home = () => {
  return (
    <div className='home'>
        <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="home_image"/>


        {/* Product id, title, price, rating, image */}
        <div className='home__row'>
        <Product
        id="1"
        title="The lean startup: How Constant Innovation Creates Radically Successful Buisnesses Paperback"
        price={29.96}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
        />
        <Product
        id="2"
        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
        price={289}
        rating={3}
        image="https://m.media-amazon.com/images/I/510uEUwLn-L._SL1037_.jpg" 
        />        
        </div>

        <div className='home__row'>
        <Product
        id="3"
        title="Apple AirPods with Charging Case (Wired)"
        price={19.99}
        rating={3}
        image="https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._AC_SL1500_.jpg" 
        />
        <Product
        id="4"
        title="Apple iPhone 11 Pro, 64GB, Midnight Green - Fully Unlocked (Renewed)"
        price={1200}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/61vflt1U5gL._AC_SL1024_.jpg" 
        />
        <Product
        id="5"
        title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Sandstone"
        price={35.96}
        rating={3}
        image="	https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_SX522_.jpg" 
        />  
        </div>

        <div className='home__row'>
        <Product
        id="6"
        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
        price={2200}
        rating={5}
        image="https://image-us.samsung.com/SamsungUS/home/computing/monitors/gaming/04162024/LC49RG90SSNXZA.jpg?$product-details-jpg$" 
        />
        </div>
        
    </div>
  )
}

export default Home