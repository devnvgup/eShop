import React from 'react'
import "./Header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { useStateValue } from '../Provider/StateProvider';

function Header() {
    const [{ basket }, _] = useStateValue()

    const handleSearch=(e)=>{
        
    }
    return (
        <div className='header'>
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="header__logo">
                    <StorefrontIcon className='header__logoImg' fontSize='large' />
                    <h2 className='header__logoTitle'>eShop</h2>
                </div>
            </Link>
            <div className="header__search">
                <input type='text' className='header__searchInput' onChange={handleSearch} />
                <SearchIcon className='header__searchIcon' fontSize='large' />
            </div>
            <div className="header__nav">
                <Link to="/login">
                    <div className="nav__item">
                        <span className="nav__itemLineOne">Hello Guest</span>
                        <span className="nav__itemLineTwo">Sign In</span>
                    </div>
                </Link>
                <div className="nav__item">
                    <span className="nav__itemLineOne">Your</span>
                    <span className="nav__itemLineTwo">Shop</span>
                </div>
                <Link to="/checkout" style={{ textDecoration: "none" }}>
                    <div className="nav__itemBasket">
                        <ShoppingBasketIcon fontSize='large' />
                        <span className="nav__basketCount nav__itemLineTwo">{basket.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
