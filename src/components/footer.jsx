import './footer.css'

function Footer() {
    return (
        <div className="footerCont">
            <div className="footSection">
                <div className="left">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequuntur facilis accusantium, impedit atque iure nostrum nobis consectetur sit cum, molestias quas incidunt voluptatem mollitia sed itaque! Nesciunt, aliquam unde?</p>
                </div>
                <div className="middle">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequuntur facilis accusantium, impedit atque iure nostrum nobis consectetur sit cum, molestias quas incidunt voluptatem mollitia sed itaque! Nesciunt, aliquam unde?</p>
                </div>
                <div className="right">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequuntur facilis accusantium, impedit atque iure nostrum nobis consectetur sit cum, molestias quas incidunt voluptatem mollitia sed itaque! Nesciunt, aliquam unde?</p>
                </div>
            </div>
            <div className="socialMedia">
                <img src={process.env.PUBLIC_URL + "/images/inster.png"} alt="Instergram icon" />
                <img src={process.env.PUBLIC_URL + "/images/download.png"}  />
                <img src={process.env.PUBLIC_URL + "/images/download2.png"} alt="" srcset="" />
            </div>
        </div>
        
     );
}

export default Footer;