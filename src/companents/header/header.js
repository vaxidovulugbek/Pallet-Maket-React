
import './header.css'
import logo from '../../assets/imgs/palletlogo.png'
function Header() {
  return(
    <div>
      <div className='container'>
          <div className='header'>
            <div className='header__info'>
              <a href='#'><img className='header__logo' src={logo} /></a>
              <form className='header__form'>
                <i className='bx bx-search'></i>
                <input className='header__input' type={"search"} placeholder="Type to search"></input>
                <span className='header__hr'></span>
                <select className='custom-select'>
                  <option className='header__optons' value={"0"}>All Categories</option>
                  <option className='header__optons' value={"1"}>One</option>
                  <option className='header__optons' value={"2"}>Two</option>
                  <option className='header__optons' value={"3"}>Three</option>
                </select>
              </form>
            </div>
            <ul className='header__list'>
              <li className='header__item'>
                 <i className='bx bx-envelope' ></i>
                 <p className='header__order header__cart'>Orders</p>
              </li>
              <li className='header__item'>
                 <i className='bx bx-cart' ></i>
                 <p className='header__cart'>Cart</p>
              </li>
              <li className='header__item'>
                 <i className='bx bx-user' ></i>
                 <p className='header__cart'>Profile</p>
              </li>
            </ul>
          </div>
          <nav className='header-navigations'>
            <ul className='nav-link'>
              <li className='header-nav-link'><button className='header-nav-btn'>Food service</button></li>
              <li className='header-nav-link'><button className='header-nav-btn'>Health & Beauty</button></li>
              <li className='header-nav-link'><button className='header-nav-btn'>Industrial Ingridients</button></li>
              <li className='header-nav-link'><button className='header-nav-btn'>Bevarages</button></li>
              <li className='header-nav-link'><button className='header-nav-btn activdark'>Pet Suplies</button></li>
              <li className='header-nav-link'><button className='header-nav-btn'>Frozen</button></li>
              <li className='header-nav-link'><button className='header-nav-btn'>Cleanng Products</button></li>
            </ul>
          </nav>
          <div className='navigation-with-link'>
            <p className='nav-with-link-whereis'><span className='nav-with-link'>Frozen</span> <i className='bx bx-chevron-right' ></i> <span className='nav-with-link'>Juice</span> <i className='bx bx-chevron-right' ></i> <span className='nav-with-link'>Moot's Unsweetened Applecouse</span></p>
            <div className='nav-link-back'><i className='bx bx-arrow-back' ></i> Back</div>
          </div>
      </div>
    </div>
  )
}

export default Header



































