import './base.css'
import './style.css'
import './grid.css'
import img from '../images/logo/logo-mona.png'
function Header()
{
    return(
        <div className="header">
            <div className="header-top grid">
                <a href="" className="header-top__slogan">you nice sologan</a>
                <div className="header-top__item">
                    <a href="" className="header-top__login-status"><i className="fas fa-sign-in-alt"></i> Login</a>
                    <a href="" className="help"><i className="far fa-question-circle"></i> Help</a>
                    <a href="" className="header-top__cart"><i className="fas fa-cart-arrow-down"></i></a>
                </div>
            </div>
                <nav className="header-body grid">
                    <ul className="navbar__list">
                        <li className="navbar__item">
                            <img src={img} alt="" className="navbar__item-logo" />
                        </li>
                        <li className="navbar__item">
                            <ul className="navbar__item-list">
                                <li className="navbar__item-sectors">
                                    <a className="navbar__item-link" href="#shop-men">MEN</a>
                                    <div className="sector-detail">
                                        <ul className="sector-detail__list">
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-title">shoes (M)</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">all shoes</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">Newest sneakers</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">lifestyle</a></li>
                                        </ul>
                                        <ul className="sector-detail__list">
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-title">clothing (M)</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">all Clothing</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">top & T-Shirts</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">Jerseys & kits</a></li>
                                        </ul>
                                        <ul className="sector-detail__list">
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-title">Gear (M)</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">bags & backpacks</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">shorts</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">trousers & tights</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="navbar__item-sectors">
                                    <a className="navbar__item-link" href="#shop-boys">BOYS </a>
                                    <div className="sector-detail">
                                        <ul className="sector-detail__list">
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-title">shoes (B)</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">all shoes</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">Newest sneakers</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">lifestyle</a></li>
                                        </ul>
                                        <ul className="sector-detail__list">
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-title">clothing (B)</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">all Clothing</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">top & T-Shirts</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">Jerseys & kits</a></li>
                                        </ul>
                                        <ul className="sector-detail__list">
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-title">Gear (B)</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">bags & backpacks</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">shorts</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">trousers & tights</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="navbar__item-sectors">
                                    WOMEN
                                    <div className="sector-detail">
                                        <ul className="sector-detail__list">
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-title">shoes (W)</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">all shoes</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">Newest sneakers</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">lifestyle</a></li>
                                        </ul>
                                        <ul className="sector-detail__list">
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-title">clothing (W)</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">all Clothing</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">top & T-Shirts</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">Jerseys & kits</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="navbar__item-sectors">
                                    GIRLS
                                    <div className="sector-detail">
                                        <ul className="sector-detail__list">
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-title">shoes (G)</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">all shoes</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">Newest sneakers</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">lifestyle</a></li>
                                        </ul>
                                        <ul className="sector-detail__list">
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-title">clothing (G)</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">all Clothing</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">top & T-Shirts</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">Jerseys & kits</a></li>
                                        </ul>
                                        <ul className="sector-detail__list">
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-title">Gear (G)</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">bags & backpacks</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">shorts</a></li>
                                            <li className="sector-detail__item"><a href="" className="sector-detail__item-link">trousers & tights</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="navbar__item-sectors">STORE</li>
                                <li className="navbar__item-sectors">CONTACT US</li>
                            </ul>
                        </li>
                        <li className="navbar__item">
                            <div className="search">
                                <input className="search-input" type="text" placeholder="Search" />
                                <button className="btn search-input"><i className="fas fa-search"></i></button>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
    );
}
export default Header;