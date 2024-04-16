import logo from '../src/icons_assets/Logo.svg'
function Footer() {
    return (
      <footer style={{display:'flex'}}>
        <div><img src={logo}></img></div>
        <div>Navigation
            <ul>
                <li><a href='./'>Home</a></li>
                <li><a href='./about'>About</a></li>
                <li><a href='./menu'>Menu</a></li>
                <li><a href='./reservations'>Reservations</a></li>
                <li><a href='./order'>Order Online</a></li>
                <li><a href='./login'>Login</a></li>
            </ul>
        </div>
        <div>Contacts
            <ul>
                <li><a href='./'>Address</a></li>
                <li><a href='./about'>Phone number</a></li>
                <li><a href='./menu'>Email</a></li>
            </ul>
        </div>
        <div>Social media
            <ul>
                <li><a href='./'>Instagram</a></li>
                <li><a href='./about'>Facebook</a></li>
                <li><a href='./menu'>Twitter</a></li>
            </ul></div>
      </footer>
    );
  }
  export default Footer;