import Product from "./products";
function Main() {
    return (
        <div className="main">
            {/* shop men */}
            <div id="shop-men" className="container">
                <img src="http://mauweb.monamedia.net/bitis/wp-content/uploads/2018/03/slideshow_1.jpg" alt="" width="100%" />
                <div className="grid">
                    <h1 className="container__title">
                        SHOP MEN'S
                    </h1>
                    <p className="container__description">Boasting the biggest heel air bag yet, bringing you
                        even closer to the feeling of walking on air.
                    </p>
                    <ul className="container__item">
                        <li className="container__item-link">Shoes</li>
                        <li className="container__item-link">Clothing</li>
                        <li className="container__item-link">Gear</li>
                    </ul>                    
                </div>
                {/* hiển thị dannh sách sản phẩm của shop MEN */}
                <Product filter = "MEN" />
            </div>
            {/* shop women's */}
            <div id="shop-women" className="container">
                <img src="http://mauweb.monamedia.net/bitis/wp-content/uploads/2018/03/slideshow_3.jpg" alt="" width="100%" />
                <div className="grid">
                    <h1 className="container__title">
                    SHOP WOMEN’S 
                    </h1>
                    <p className="container__description">Our ground-breaking running innovation seven years
                        in the making undergoes new evolution.
                    </p>
                    <ul className="container__item">
                        <li className="container__item-link">Shoes</li>
                        <li className="container__item-link">Clothing</li>
                    </ul>                    
                </div>
                {/* hiển thị dannh sách sản phẩm của shop MEN */}
                <Product filter = "WOMEN" />
            </div>
            {/* shop boy's */}
            <div id="shop-boys" className="container">
                <img src="http://mauweb.monamedia.net/bitis/wp-content/uploads/2018/03/slideshow_5.jpg" alt="" width="100%" />
                <div className="grid">
                    <h1 className="container__title">
                        SHOP BOY’S
                    </h1>
                    <p className="container__description">The Air Max styles kids love—from the ’87 original, Air Max 1,
                        to the new larger-than-life Air Max 270.
                    </p>
                    <ul className="container__item">
                        <li className="container__item-link">Shoes</li>
                        <li className="container__item-link">Clothing</li>
                        <li className="container__item-link">Gear</li>
                    </ul>                    
                </div>
                <Product filter = "BOY" />
            </div>
            {/* shop girl's */}
            <div id="shop-boys" className="container">
                <img src="http://mauweb.monamedia.net/bitis/wp-content/uploads/2018/03/P3_1_Image-1.jpg" alt="" width="100%" />
                <div className="grid">
                    <h1 className="container__title">
                        SHOP GIRL’S
                    </h1>
                    <p className="container__description">Retro, new or personally customised,
                        get the Air Max that’s right for you.
                    </p>
                    <ul className="container__item">
                        <li className="container__item-link">Shoes</li>
                        <li className="container__item-link">Clothing</li>
                        <li className="container__item-link">Gear</li>
                    </ul>                    
                </div>
                <Product filter = "GIRL" />
            </div>
            </div>
    )

}
export default Main;