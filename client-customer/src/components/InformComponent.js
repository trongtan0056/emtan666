import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../contexts/MyContext';

class Inform extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
      <div className="border-bottom inform-customer fire-border ">
        <div className="float-left">
        {this.context.token === '' ?
          <div><Link to='/login' className='login-btn'>Login</Link> | <Link to='/signup' className='signup-btn'>Sign-up</Link> | <Link to='/active' className='active-btn'>Active</Link></div>
          :
          <div><div className='Welcome'>Hello <b>{this.context.customer.name}</b></div>  <Link to='/home' onClick={() => this.lnkLogoutClick()} className='Log-out-cus'>Logout</Link>  <Link to='/myprofile' className='my-pro-cus'>My profile</Link>  <Link to='/myorders' className='my-ord-cus'>My orders</Link></div>
        }
        </div>
        <div className="float-right">
        <Link to='/mycart' class="cart-button">
        <span class="cart-icon">&#128722;</span>
        <span class="cart-text">My cart</span>
        </Link> have <b>{this.context.mycart.length}</b> items
        </div>
        <div className="float-clear" />
      </div>
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setCustomer(null);
    this.context.setMycart([]);
  }
}
export default Inform;