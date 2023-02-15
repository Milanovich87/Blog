import { useEffect } from 'react';
import { useState } from 'react'
import './App.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { ThemeContext } from '../Posts/contexts';
import { THEMES } from '../Posts/constants';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageAllPosts } from '../AllPages/PageWithPosts';
import { PageSignIn } from '../AllPages/PageSignIn';
import { PageSignUp } from '../AllPages/PageSignUp';
import { PageResertPassword } from '../AllPages/PageResertPassword';
import { PageNewPassword } from '../AllPages/PageNewPassword';
import { PageSuccess } from '../AllPages/PageSuccess';
import { PageAddPost } from '../AllPages/PageAppPost';
import { Activation } from '../Activation/Activation';
import { useDispatch } from 'react-redux';
import { getUser } from '../../redux/actionCreators/userActionCreators';
import { MyPosts } from '../AllPages/PageMyPosts';


export const App = () => {

  const dispatch = useDispatch();
  const [theme, setTheme] = useState(THEMES.light);
  const handleLightTheme = () => {
    setTheme(THEMES.light)
  }
  const handleDarkTheme = () => {
    setTheme(THEMES.dark)
  }

  useEffect(() => {
    dispatch(getUser())
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, handleLightTheme, handleDarkTheme }}>
      <div className={`App--${theme}`} >

        <BrowserRouter>

          <Header />
          <Routes>
            <Route path='/'>
              <Route index element={<PageAllPosts />} />
              <Route path='sign_in' element={<PageSignIn />} />
              <Route path='sign_up' element={<PageSignUp />} />
              <Route path='reset_password' element={<PageResertPassword />} />
              <Route path='new_password' element={<PageNewPassword />} />
              {/* <Route path='success' element={<PageSuccess />} /> */}
              <Route path='add_post' element={<PageAddPost />} />
              <Route path='success' element={<PageSuccess />} />
              <Route path='my_posts' element={<MyPosts />} />
              <Route path='activate'>
                <Route path='*' element={<Activation />} />
              </Route>
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div >
    </ThemeContext.Provider>
  );
}


