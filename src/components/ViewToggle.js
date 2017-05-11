import React, { Component } from 'react';
import LandingPage from './LandingPage';
import FilterView from './FilterView';
import { connect } from 'react-redux'
import openModal from '../actions/openModal'



export default class ViewToggle extends Component {

  updatePrisonersInView(category, values){
    this.props.prisoners.filter((element) =>{
      values.includes(element[category])
    })
  }

  render() {

     const viewToggle = <FilterView />

    return (
      <div>
      {viewToggle}
      </div>
    );
  }

}
