import './footer.css'
import footerlogo from '../../assets/imgs/palletlogo.png'

function Footer() {
  return(
    <div className='container'>
      <div className='footer'>
        <div> 
          <a href='#'><img className='footer__logo' src={footerlogo} /></a>
          <p className='footer__reserved'>@ ePallet 2022 All right reserved</p>
          <div className='footer__comp'>
            <a className='footer__twit' href='#'><span><i className='bx bxl-twitter'></i></span> <span className='f-twit'>Twitter</span></a>
            <p className='footer__sum'>93</p>
            <a className='footer__facebook' href='#'><span><i className='bx bxl-facebook-square' ></i></span> <span className='f-twit'>Lite</span></a>
            <p className='footer__sum'>896</p>
          </div>
        </div>
        <ul className='footer__list'>
          <li className='footer__item-activ'>FOR CUSTUMERS</li>
          <li className='footer__item'><a className='footer__item-link' href='#'>Returns</a></li>
          <li className='footer__item'><a className='footer__item-link' href='#'>Payment Accaunts</a></li>
          <li className='footer__item'><a className='footer__item-link' href='#'>Policies</a></li>
          <li className='footer__item'><a className='footer__item-link' href='#'>Personal Assisteans</a></li>
          <li className='footer__item'><a className='footer__item-link' href='#'>Shipping Tracking</a></li>
        </ul>
        <ul className='footer__list'>
          <li className='footer__item-activ'>FOR Vendors</li>
          <li className='footer__item'><a className='footer__item-link' href='#'>Pricing</a></li>
          <li className='footer__item'><a className='footer__item-link' href='#'>Payment Accaunts</a></li>
          <li className='footer__item'><a className='footer__item-link' href='#'>Balance Recharge</a></li>
          <li className='footer__item'><a className='footer__item-link' href='#'>How to invamside</a></li>
        </ul>
        <ul className='footer__list'>
          <li className='footer__item-activ'>COMPANY</li>
          <li className='footer__item'><a className='footer__item-link' href='#'>About</a></li>
          <li className='footer__item'><a className='footer__item-link' href='#'>Jobs</a></li>
          <li className='footer__item'><a className='footer__item-link' href='#'>Press kit </a></li>
          <li className='footer__item'><a className='footer__item-link' href='#'>Contact</a></li>
          <li className='footer__item'><a className='footer__item-link' href='#'>Privasy & Terms</a></li>
        </ul>
        <ul className='footer__list'>
          <li className='footer__item-activ'>HELP CENTER</li>
          <li className='footer__item'><a className='footer__item-link' href='#'>Shipping ratest</a></li>
          <li className='footer__item'><a className='footer__item-link' href='#'>Payment Accaunts</a></li>
          <li className='footer__item'><a className='footer__item-link' href='#'>Return & Replacaments</a></li>
          <li className='footer__item'><a className='footer__item-link' href='#'>ePaliet Assistend</a></li>
          <li className='footer__item'><a className='footer__item-link' href='#'>Help</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
















