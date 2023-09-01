import logo from '../img/jclogo.png';
import '../style/Navbar.css';

function Logo() {
    return ( 
    <div className = 'logo'>
        <img src={logo} 
        alt = 'logo'
        className = 'logo-img'></img>
    </div>
    );
}

export default Logo;