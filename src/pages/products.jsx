import './products.css'

function Products() {

    // const products = [
    //     {"iphone": "Apple iPhone 11.jpeg", "price": 15000}, 
    //     {"clock": "Clock.jpg", "price": 15000}, 
    //     {"monitor": "monitor.jpeg", "price": 15000}, 
    //     {"ps": "ps5.webp", "price": 15000}, 
    //     {"system": "sound.jpeg", "price": 15000}, 
    //     {"tv": "tv.jpg", "price": 15000}
    // ]
    



    return ( 
        <div className="prodSection">
            <div className="category">
                <div className="productCont">
                    <div className="prodImage" >
                        <a href={process.env.PUBLIC_URL + '/images/Apple iPhone 11.jpeg'}> <img src={process.env.PUBLIC_URL + '/images/Apple iPhone 11.jpeg'} alt="iPhone 11" /> </a>
                    </div>
                    <div className="description" >
                        <p>this is description</p>
                    </div>
                </div>
                <div className="productCont">
                    <div className="prodImage" >
                        <img src={process.env.PUBLIC_URL + '/images/monitor.jpeg'} alt="monitor" />
                    </div>
                    <div className="description" >
                        <p>this is description</p>
                    </div>
                </div>
            <div className="productCont">
                <div className="prodImage" >
                    <img src={process.env.PUBLIC_URL + '/images/ps5.webp'} style={{backgroundColor: "black", width: "200px",height:"120px"}} alt="playstation 5" />

                </div>
                <div className="description" >
                    <p>this is description</p>
                </div>
            </div>
                <div className="productCont">
                    <div className="prodImage" >
                        <img src={process.env.PUBLIC_URL + '/images/sound sytem.jpeg'} alt="home system" />

                    </div>
                    <div className="description" >
                        <p>this is description</p>
                    </div>
                </div>
            </div>
            <div className="category">
                <div className="productCont">
                    <div className="prodImage" >
                        <img src={process.env.PUBLIC_URL + '/images/tv.jpg'} alt="TV" />
                    </div>
                    <div className="description" >
                        <p>this is description</p>
                    </div>
                </div>
                <div className="productCont">
                    <div className="prodImage" >
                        <img src={process.env.PUBLIC_URL + '/images/fan.jpg'} alt="Fan" />
                    </div>
                    <div className="description" >
                        <p>this is description</p>
                    </div>
                </div>
            <div className="productCont">
                <div className="prodImage" >
                    <img src={process.env.PUBLIC_URL + '/images/smartW.jpg'} alt="Smart watch" />

                </div>
                <div className="description" >
                    <p>this is description</p>
                </div>
            </div>
                <div className="productCont">
                    <div className="prodImage" >
                        <img src={process.env.PUBLIC_URL + '/images/mouseEdi.jpg'} alt="Mouse" />

                    </div>
                    <div className="description" >
                        <p>this is description</p>
                    </div>
                </div>
            </div>
        </div>
        
     );
}

export default Products;