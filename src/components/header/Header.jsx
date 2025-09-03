import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { useStateValue } from '../../StateProvider';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { auth } from '../../../firebase';
import { signOut } from 'firebase/auth';

const Header = () => {

const [{ basket }] = useStateValue();


  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <nav className='header'>

        {/* logo on the left -> img */}
        <Link to={"/"}>
        <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon_logo"/>
        </Link>

        {/* search box */}
        <div className="header__search">
        <input type="text" className='header__searchInput' />
        <SearchIcon className="header__searchIcon"/>
        </div>

        {/* 3 links */}
        <div className='header__nav'>
            {/* 1st link */}
            <Link to={"/login"} className='header__link'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Hello Kartik</span>
                <span className='header__optionLineTwo'>SignIn</span>
            </div>
            </Link>

            {/* 2nd link */}
            <Link to={"/"} className='header__link'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>
            </Link>   

            {/* 3rd link */}
            <Link to={"/"} className='header__link'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>
            </Link>

            {/* 4th link */}
            <Link to={"/checkout"} className='header__link'>
            <div className="header__optionBasket">
                <ShoppingCartRoundedIcon/>

                <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
            </div>
            </Link>

            <div className='header__option'>
                <span 
                className='header__logoutIcon' onClick={handleSignOut}><LogoutRoundedIcon fontSize='medium'/>
                </span>
            </div>


        </div>


    </nav>
  )
}

export default Header