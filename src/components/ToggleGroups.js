import React, { Component } from 'react';
import Dropdown from 'react-dropdown'
import switchSelectedGroup from '../actions/switchSelectedGroup'
import switchExplainerText from '../actions/switchExplainerText'
import { connect } from 'react-redux'

class ToggleGroups extends Component {

  handleToggle(e) {
    var allMatcher = {"race": "All races", "ethnicity": "All ethnicities", "age": "All ages"}

    this.props.switchSelectedGroup(e.value, findCategory(e.value), allMatcher[findCategory(e.value)])
    this.props.switchExplainerText(e.value, findCategory(e.value), allMatcher[findCategory(e.value)])
    this._onSelect

    function findCategory(word){
      if (categorySelector(["All races", "White", "Black", "Indian", "Other", "Unknown"], word, 'race')) {
        return categorySelector(["All races", "White", "Black", "Indian", "Other", "Unknown"], word, 'race')
      } else if (categorySelector(["All ethnicities", "Hispanic", "Not Hispanic", "Unknown"], word, 'ethnicity')) {
        return (categorySelector(["All ethnicities", "Hispanic", "Not Hispanic", "Unknown"], word, 'ethnicity'))
      } else if (categorySelector(["All ages", "20-29", "30-39", "40-49", "50-59", "60-69", "70+"], word, 'age')) {
        return (categorySelector(["All ages", "20-29", "30-39", "40-49", "50-59", "60-69", "70+"], word, 'age'))
      }
      function categorySelector(optionsArray, searchWord, category){
        // debugger;
        if(optionsArray.includes(searchWord)){
          return category;
        }
        return false
      }
    }
  }

  render() {
      return(
        <div>
        <br></br>  <br></br>
          <div id="dropdowns" >
            <Dropdown id="race-dropdown" label="race" options={["All races", "White", "Black", "Indian", "Other", "Unknown"]} onChange={this.handleToggle.bind(this)} placeholder="Select Race" />
            <Dropdown id="ethnicity-dropdown" options={["All ethnicities", "Hispanic", "Not Hispanic", "Unknown"]} onChange={this.handleToggle.bind(this)} placeholder="Select Ethnicity" />
            <Dropdown id="age-dropdown" options={["All ages", "20-29", "30-39", "40-49", "50-59", "60-69", "70+"]} onChange={this.handleToggle.bind(this)} placeholder="Select Age" />
            <Dropdown id="previous-convictions-dropdown" options={["All conviction counts", "0", "1", "2"]} onChange={this.handleToggle.bind(this)} placeholder="Previous Convictions" />
          </div>
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    allPrisoners: state.unfilteredApp.allPrisoners,
    prisonersInView: state.unfilteredApp.prisonersInView,
    selectedPrisoner: state.unfilteredApp.selectedPrisoner,
    isModalOpen: state.unfilteredApp.isModalOpen
  }
}

export default connect(null, {switchSelectedGroup: switchSelectedGroup, switchExplainerText: switchExplainerText})(ToggleGroups);
