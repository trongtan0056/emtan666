import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      sort:"default",
    };
  }
  render() {
    const prods = this.state.products.map((item) => {
      return (
        <div key={item._id} className="inline">
          <figure>
            <Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt="" /></Link>
            <figcaption className="text-center">{item.name}<br />Price: {item.price}</figcaption>
          </figure>
        </div>
      );
    });
    return (
      <div className="text-center">
        <h2 className="text-center list-pro">LIST PRODUCTS</h2>
        <div>
      <select value={this.state.sort} onChange={(e)=>{this.setState({sort:e.target.value});this.cmbSortChange(e.target.value);}}>
        <option value="default">------Sort by------</option>
        <option value="nameASC">Name(a&#8594;z)</option>
        <option value="priceASC">Price(low&#8594;high)</option>
        <option value="priceDESC">Price(low&#8594;low)</option>
        </select>

      </div>
      {prods}
        
      </div>
      
    );
  }
  componentDidMount() { // first: /product/...
    const params = this.props.params;
    if (params.cid) {
      this.apiGetProductsByCatID(params.cid);
    } else if (params.keyword) {
        this.apiGetProductsByKeyword(params.keyword);
      }
  }
  componentDidUpdate(prevProps) { // changed: /product/...
    const params = this.props.params;
    if (params.cid && params.cid !== prevProps.params.cid) {
      this.apiGetProductsByCatID(params.cid);
    } else if (params.keyword && params.keyword !== prevProps.params.keyword) {
        this.apiGetProductsByKeyword(params.keyword);
    }
  }
  // apis
  apiGetProductsByCatID(cid) {
    axios.get('/api/customer/products/category/' + cid).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }
  // apis
  apiGetProductsByKeyword(keyword) {
    axios.get('/api/customer/products/search/' + keyword).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }
  //even -hander
  cmbSortChange(sort){
    if(sort==='nameASC'){
      this.state.products.sort((a, b)=>a.name.localeCompare(b.name));
    } else if (sort === 'nameDESC'){this.state.products.sort((a,b)=> b.name.localeCompare(a.name));

    }else if (sort === 'priceASC'){this.state.products.sort((a,b)=> a.price-b.price);
    }else if (sort === 'priceDESC'){this.state.products.sort((a,b)=> b.price-a.price);
  }
}}
export default withRouter(Product);