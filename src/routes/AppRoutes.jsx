import { Link, Outlet, Route, Routes } from 'react-router'
import MainNav from '../components/MainNav'
import Layout from '../layouts/Layout'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Admin/Dashboard'
import Manage from '../pages/Admin/Manage'
import Setting from '../pages/Admin/Setting'
import Recap from '../pages/Recap'
import RecapUseState from '../pages/RecapUseState'
import EasyZustand from '../pages/EasyZustand'
import Product from '../pages/Product'
import MyCart from '../pages/MyCart'


function AppRoutes() {
    return (
        <div>


            <Routes>
                {/* Public */}
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />

                    <Route path="recap" element={<Recap />} />
                    <Route path="recapusestate" element={<RecapUseState />} />
                    <Route path="easyzustand" element={<EasyZustand />} />
                    <Route path="product" element={<Product/>} />
                    <Route path="mycart" element={<MyCart/>} />
                </Route>

                {/* Private */}
                <Route path="admin" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="manage" element={<Manage />} />
                    <Route path="setting" element={<Setting />} />
                </Route>

            </Routes>
        </div >
    )
}

export default AppRoutes