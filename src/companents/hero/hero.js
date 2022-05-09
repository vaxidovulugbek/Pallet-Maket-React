
import './hero.css'
import React, { Component } from 'react';
import bigjuice1 from  '../../assets/imgs/moots.jpeg'
import smalljuice from  '../../assets/imgs/moots.jpeg'

class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count:1,
      sum:32,  
      ptsum:100,
      ptminisum:30,   
    } 
  }
  encrement = () => {
    this.setState({count: this.state.count + 1})
    this.setState({sum: this.state.sum + 32})
    this.setState({ptsum: this.state.ptsum + 100})
    this.setState({ptminisum: this.state.ptminisum + 10})
  }
  decrement = () => {
    if(this.state.count > 1){
      this.setState({count: this.state.count - 1})
      this.setState({sum: this.state.sum - 32})
      this.setState({ptsum: this.state.ptsum - 100})
      this.setState({ptminisum: this.state.ptminisum -10})
    }
  }
  nol = () => {
    this.setState({count: this.state.count = 0})
  }

  render() {
    return (
      <div className='container'>
      <div className='hero'>
        <div className='hero__juices'>
          <ul className='hero-big-juice-list'>
            <li className='hero-big-juice-item'><img className='hero-bigjuice-img' src={bigjuice1} /></li>
            <li className='hero-big-juice-item'><img className='hero-bigjuice-img' src={bigjuice1} /></li>
            <li className='hero-big-juice-item'><img className='hero-bigjuice-img' src={bigjuice1} /></li>
            <li className='hero-big-juice-item'><img className='hero-bigjuice-img' src={bigjuice1} /></li>
            <li className='hero-big-juice-item'><img className='hero-bigjuice-img' src={bigjuice1} /></li>
          </ul>
          <ul className='hero-small-juice-list'>
            <li><button className='hero-smalljuice-btn'><img className='hero-smaljuice-img' src={smalljuice} /></button></li>
            <li><button className='hero-smalljuice-btn'><img className='hero-smaljuice-img' src={smalljuice} /></button></li>
            <li><button className='hero-smalljuice-btn'><img className='hero-smaljuice-img' src={smalljuice} /></button></li>
            <li><button className='hero-smalljuice-btn'><img className='hero-smaljuice-img' src={smalljuice} /></button></li>
            <li><button className='hero-smalljuice-btn'><img className='hero-smaljuice-img' src={smalljuice} /></button></li>
          </ul>
        </div>
        <div className='hero__info'>
          <span className='hero__moot'>MOOTS</span>
          <h2 className='hero__title'>Moot's Unsweeteneted Applesauce</h2>
          <p className='hero__packsize'>Pack Size 24/16.90</p>
          <p className='hero__text'>Cheff Mehmell Applecause is a delecous classic and part of a healthly diet low in saturdeet fet with 40% Vitamin c </p>
          <p className='hero__download'><i className='bx bx-cloud-download' ></i> Download speek sheed</p>
          <span className='hero__hr'></span>
          <div className='hero__price-part'>
            <div className='hero__price'>$<span id='herosum'>{this.state.sum}</span><span className='hero-sumel'> BD</span> /Cs <span>[$0.21/oz]</span></div>
            <div>$<span>{this.state.ptsum}</span><span id='hero__cent'>{this.state.ptminisum}</span>/ Pt</div>
          </div>
          <div className='hero__time-info'>
            <p className='hero__lead-time'>Approx.Lead Time: 12 days</p>
            <p>Information about product was providet by manufacturer</p>
          </div>

          <div className='hero__btngroup'>
            <div className='hero__bx-sum'>
              <span className='hero__product-sum'>{this.state.count}</span>
              <div className='hero__end-dec'>
                <button  className='hero__enc' onClick= {() =>this.encrement()}><i className='bx bx-chevron-up'></i></button>
                <button  className='hero__enc' onClick= {() =>this.decrement()}><i className='bx bx-chevron-down'></i></button>
              </div>
            </div>
            <button className='hero__addcard-btn'><i className='bx bx-shopping-bag'></i> Add to card</button>
            <button className='hero__pannel-btn'><i className='bx bx-cog'></i>Custom pallet</button>
          </div>
          <button className='hero__add-btn'><i className='bx bx-star'></i>Add to wishlist</button>
        </div>
        <div className='hero__pallet'>
          <ul className='hero__pallets-list'>
            <li className='hero__pallets-item'>
              <div className='hero__pallets-price'>1:Palet <span>Delevired Price</span></div>
              <div className='hero__pallets-prices'>
                <span className='hero__pallets-prices1'>$5.65/Cs</span>
                <span className='hero__pallets-prices1'>$565.13/Pit</span>
                <span>$0.02oz</span>
              </div>
            </li>
            <li className='hero__pallets-item'>
              <div className='hero__pallets-price'>3:Palet <p>Delevired Price</p></div>
              <div className='hero__pallets-prices'>
                <span className='hero__pallets-prices1'>$5.23/Cs</span>
                <span className='hero__pallets-prices1'>$523.35/Pit</span>
                <span className='hero__pallets-prices3'>$0.02oz</span>
                <span className='hero__pallets-saveup'>[Save Up To 12%]</span>
              </div>
            </li>
            <li className='hero__pallets-item'>
              <div className='hero__pallets-price'>5:Palet <p>Delevired Price</p></div>
              <div className='hero__pallets-prices'>
                <span className='hero__pallets-prices1'>$4.97/Cs</span>
                <span className='hero__pallets-prices1'>$497.67/Pit</span>
                <span className='hero__pallets-prices3'>$0.02oz</span>
                <span className='hero__pallets-saveup'>[Save Up To 12%]</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    //   <div>
    //   <p> {this.state.count} </p>
    //   <div>
        
    //     <button onClick= {() =>this.encrement()}>+</button>
    //     <button onClick= {() =>this.decrement()}>-</button>
    //     <button onClick= {() =>this.nol()}>Reset</button>
    //   </div>
      
    // </div>  
    )
    
  }
}

export default Hero
