import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: ''
    };
  }
  render() {
    const cates = this.state.categories.map((item) => {
      return (
        <li key={item._id} className="menu"><Link to={'/product/category/'+ item._id} className='item-customer'>{item.name}</Link></li>
      );
    });
    return (
      <div className="border-bottom tabmenu-customer"> 
      {/* Phần chứa logo */}
        <div className="logo-container">
          <Link to='/'> {/* Đặt liên kết cho logo */}
            <div className="logo-image"></div> {/* Thay thế vùng này bằng logo hình ảnh hoặc vùng chứa logo */}
          </Link>
        
        <div className="float-left">
          <ul className="menu-customer">
          <li className="menu"><Link to='/' className='home-customer'>Home</Link></li>
          <li className="menu"><Link to='/gmap'>Gmap</Link></li>
            {cates}
          </ul>
        </div>
        <div style={{display:"inline"}} class="form-switch">
          <input class="form-check-input" type="checkbox" onChange={(e) => this.ckbChangeMode(e)}/>&nbsp; Light /  Dark mode
        </div>
        <div className="float-right">
          <form className="search">
          <input type="search" placeholder="Enter Keyword" className="keyword" value={this.state.txtKeyword} onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }} />
        <input type="submit" value="SEARCH" onClick={(e) => this.btnSearchClick(e)} />
          </form>
        </div>
        <div className="float-clear" />
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.apiGetCategories();
  }
  // apis
  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
  // event-handlers
  ckbChangeMode(e){if(e.target.checked){document.documentElement.setAttribute('data-bs-theme', 'dark');}
else{document.documentElement.setAttribute('data-bs-theme', 'light');}
}
  btnSearchClick(e) {
    e.preventDefault();
    this.props.navigate('/product/search/' + this.state.txtKeyword);
  }
}
export default withRouter(Menu);