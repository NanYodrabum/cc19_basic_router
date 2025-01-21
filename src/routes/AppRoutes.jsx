import { Link, Route, Routes } from 'react-router'
import MainNav from '../components/MainNav'


function AppRoutes() {
    return (
        <div>
            <MainNav />

            <Routes>
                {/* Public */}
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="about" element={<h1>About</h1>} />
                <Route path="contact" element={<h1>Contact</h1>} />
                <Route path="login" element={<h1>Login page</h1>} />
                <Route path="register" element={<h1>Register</h1>} />


                {/* Private */}
                <Route path="admin">
                    <Route index element={<h1>Dashboard page</h1>} />
                    <Route path="manage" element={<h1>Manage page</h1>} />
                    <Route path="setting" element={<h1>Setting page</h1>} />
                </Route>

            </Routes>
        </div>
    )
}

export default AppRoutes