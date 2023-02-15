import React, { useEffect, useRef, useState } from "react";
import '../Burger/Burger.scss'
import { NavLink, useNavigate } from 'react-router-dom'
// import { Button } from "../Button/Button";
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { useContext } from 'react'
import { ThemeContext } from '../Posts/contexts';
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../redux/types";
import { logOut } from "../../redux/actionCreators/userActionCreators";



export const Burger = ({ setMenu }: { setMenu: Function }) => {
    function useOutsideAlerter(ref: any, setMenu: Function) {
        useEffect(() => {
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setMenuClass("menu hidden")
                    setBurgerClass("burger-bar unclicked")
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]);
    }
    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state: IStore) => state.users.user)
    const handleLogOut = () => {
        dispatch(logOut());
        localStorage.removeItem('jwtAccess');
        localStorage.removeItem('jwtRefresh');
        setMenu(false);
        navigate('/sign_in');
    }
    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    // const closeMenu = () => {
    //     setBurgerClass("burger-bar unclicked")
    //     setMenuClass("menu hidden")
    // }

    const { theme } = useContext(ThemeContext)
    const menuRef = useRef(null);
    useOutsideAlerter(menuRef, setMenu);



    return (
        <div className={`burger--${theme}`} >
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>
            <div className={menu_class} ref={menuRef}>
                {user &&
                    <div className='menu__username'>
                        <span className='initials2'>{`${user.username?.charAt(0).toUpperCase()}${user.username?.charAt(user.username.length - 1).toUpperCase()}`}</span>
                        <div className="user__name">{user?.username}</div>
                    </div>
                }
                <div className='home__link'>
                    <NavLink to='/' style={{ textDecoration: 'none' }}>Home</NavLink>
                </div>
                <div className='add-post__link'>
                    <NavLink to='/add_post' style={{ textDecoration: 'none' }}>Add post</NavLink>
                </div>
                {user && <div className='my-posts__link'>
                    <NavLink to='/my_posts' style={{ textDecoration: 'none' }}>My posts</NavLink>
                </div>}

                <ThemeToggler />

                {user && <div>
                    <button className='log-out__link' onClick={handleLogOut}>Log Out</button>
                </div>}

            </div>
        </div>
    )
}



