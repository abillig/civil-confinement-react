import React, { Component } from 'react';
import Dropdown from 'react-dropdown'


export default class ToggleGroups extends Component {

  handleToggle(e) {
    this.props.switchGroup(e.value)
    this._onSelect
  }

  render() {
      return(
        <div>
        <br></br>  <br></br>
          <div id="dropdowns">
            <Dropdown id="race-dropdown" options={["All races", "White", "Black", "Indian", "Other", "Unknown"]} onChange={this.handleToggle.bind(this)} placeholder="Select Race" />
            <Dropdown id="race-dropdown" options={["All ethnicities", "Hispanic", "Not Hispanic", "Unknown"]} onChange={this.handleToggle.bind(this)} placeholder="Select Ethnicity" />
            <Dropdown id="age-dropdown" options={["All ages", "20-29", "30-39", "40-49", "50-59", "60-69", "70+"]} onChange={this.handleToggle.bind(this)} placeholder="Select Age" />
            <Dropdown id="previous-convictions-dropdown" options={["All conviction counts", "0", "1", "2"]} onChange={this.handleToggle.bind(this)} placeholder="Select Previous Convictions" />
          </div>
        </div>
        // <div id="groupButtons">
        //   <div className="groupName" onClick={this.handleToggle.bind(this)}>White</div>
        //   <div className="groupName" onClick={this.handleToggle.bind(this)}>Black</div>
        //   <div className="groupName" onClick={this.handleToggle.bind(this)}>Other</div>
        //   <div className="groupName" onClick={this.handleToggle.bind(this)}>Unknown</div>
        //
        // </div>
      );
  }
}
