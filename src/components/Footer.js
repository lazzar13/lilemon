import logo from '../src/icons_assets/logo-white.png'

function Footer() {
    return (
    <div className='FooterDiv'>
      <footer className='Footer'>
        <div><img src={logo}></img></div>
        <div className='FooterComponents'>Navigation
            <ul>
                <li><a href='./'>Home</a></li>
                <li><a href='./about'>About</a></li>
                <li><a href='./menu'>Menu</a></li>
                <li><a href='./reservations'>Reservations</a></li>
                <li><a href='./order'>Order Online</a></li>
                <li><a href='./login'>Login</a></li>
            </ul>
        </div>
        <div className='FooterComponents'>Contacts
            <ul className='ItalicContacts'>
                <li>678 Pisa Ave, Chicago, IL 60611</li>
                <li>(312) 593-2744</li>
                <li>customer@littlelemon.com</li>
            </ul>
        </div>
        <div className='FooterComponents'>Social media
            <ul>
                <li><a href='./'>Instagram</a></li>
                <li><a href='./about'>Facebook</a></li>
                <li><a href='./menu'>Twitter</a></li>
            </ul></div>
      </footer></div>
    );
  }
  export default Footer;