import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import {Link} from 'react-router-dom'

class Menu extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
      <div className="border-bottom brmenu fire-border">
        <img src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-flower-pot-and-alphabet-p-logo-design-plant-alphabet-p-and-png-image_5069349.jpg" width="220px" height="160px"  alt="" />
        <img src="https://www.cleanipedia.com/images/5iwkm8ckyw6v/5ZtLUJ1JtUez36Jz2Lqlor/a2a6557801b8bae97f8c36ccec86b418/Y2FjaC10cm9uZy1jYXktaG9hLW5oYWkuanBn/1200w/nh%E1%BB%AFng-c%C3%A0nh-hoa-m%C3%A0u-tr%E1%BA%AFng-n%E1%BB%9F-r%E1%BB%99-d%C6%B0%E1%BB%9Bi-b%E1%BA%A7u-tr%E1%BB%9Di-xanh-c%C3%B3-m%C3%A2y..jpg"   width="1190px" height= "160px" alt="" />
        <div className="float-left">
          <ul className="menu menu-ad">
            <li className="menu home-ad"><Link to='/admin/home' className='meu-text'>Home</Link></li>
            <li className="menu cate-ad"><Link to='/admin/category' className='meu-text'>Category</Link></li>
            <li className="menu pro-ad"><Link to='/admin/product' className='meu-text'>Product</Link></li>  
            <li className="menu ord-ad"><Link to='/admin/order' className='meu-text'>Order</Link></li>
            <li className="menu cus-ad"><Link to='/admin/customer' className='meu-text'>Customer</Link></li>
            <li className="menu cus-ad"><Link to='/admin/statistics'>Statistics </Link></li>
          </ul>
        </div>
        <div className="float-right Out-log">
         <p className='VIP'> Hello <b>{this.context.username}</b> </p> <Link to='/admin/home' onClick={() => this.lnkLogoutClick()} className='lox'>Logout</Link>
        </div>
        <div className="float-clear" />
      </div> 
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setUsername('');
  }
}
export default Menu;