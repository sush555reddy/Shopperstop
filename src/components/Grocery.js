import React, { Component } from "react";
import { connect } from "react-redux";
import { addGroceryById } from "../actions";  
class Grocery extends Component {
  render() {
      console.log(this.props);
    return (
      <div className="col-md-4">
      <h2 className="text-center">Grocery items</h2>
        <ul className="list-group">
        {this.props.grocery.map((item)=>{
            return <li key={item.id} onClick={()=>this.props.addGroceryById(item.id)} className="list-group-item">
            <b>{item.name}</b>-<span className="label label-primary">${item.cost}</span>-
            <span className="label label-warning">{item.calories} k.cal</span>--
            <span className="label label-danger">{item.weight} mg </span>
            
            </li>
        })}
           </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
    return {
     grocery :state.grocery
  }
}
  export default connect(mapStateToProps, {addGroceryById})(Grocery);

