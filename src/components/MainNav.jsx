import { Link } from 'react-router'

function MainNav() {
    return (

        <nav className="flex justify-between h-8 bg-green-200 items-center" >
            <div className="flex gap-4">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                {/* <Link to='/recap'>Recap</Link>
                <Link to ='/recapusestate'>Recap Usestate</Link>
                <Link to = '/easyzustand'>Easy Zustand</Link> */}
                <Link to="/product">Product</Link>
                <Link to="/mycart">Cart</Link>

            </div>
            <div className="flex gap-4">
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
        </nav>

  )
}

export default MainNav