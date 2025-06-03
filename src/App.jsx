
import './App.css'
import Home from './Pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import UserPanel from './Pages/UserPanel'
import Products from './Pages/Products'
import Analytics from './Pages/Analytics'
import Profile from './Pages/Profile'
import SellerProduct from './Pages/SellerProduct'
import SellerSettings from './Pages/SellerSettings'
import RequestPermission from './Pages/RequestPermission'
import GrantPermission from './Pages/GrantPermission'
import SellerSideBar from './Pages/SellerSideBar'
import CardContent from './Pages/CardContent'
import Favourites from './Pages/Favourites'
import SellerSignup from './Pages/SellerSignup'
import AddGameForm from './Pages/AddGameForm'
import SellerLogout from './Pages/SellerLogout'

function App() {
  return (
    <div data-theme='dark'>
     <NavBar/>
         <Routes>
          <Route path='/becomeaseller' element={<SellerSignup/>}/>

          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/requestpermission' element={<RequestPermission/>}></Route>
          <Route path='/grantpermission' element={<GrantPermission/>}></Route>
          
          <Route path='/userpanel' element={<UserPanel/>}></Route>
          <Route path='/products' element={<Products/>}/>
          <Route path='/analytics' element={<Analytics/>}/>
          <Route path='/cardcontent' element={<CardContent/>}></Route>

          <Route path='/sellerprofile' element={<Profile/>}/>
          <Route path='/sellerproducts' element={<SellerProduct/>}/>
          
          <Route path='/sellersettings' element={<SellerSettings/>}/>
          <Route path='/sellerlogout' element={<SellerLogout/>}/>
          <Route path='/sellerAddGame' element={<AddGameForm/>}></Route>

          <Route path='/favourites' element={<Favourites/>}/>
          </Routes>
        <Footer/>
    </div>
  )
}

export default App
