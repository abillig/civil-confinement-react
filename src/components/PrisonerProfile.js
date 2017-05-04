import React, { Component } from 'react';


export default class PrisonerProfile extends Component {

  render() {
    return (
      <div>
      <div className="prisonerDetails">
        <div className="prisonerName">{this.props.selectedPrisoner.firstName} {this.props.selectedPrisoner.lastName.substring(0, 1)}.</div>
        <div className="prisonerDetailField"><strong>Date of Birth: </strong>{this.props.selectedPrisoner.dateOfBirth}</div>
        <div className="prisonerDetailField"><strong>Race: </strong>{this.props.selectedPrisoner.Race}</div>
        <div className="prisonerDetailField"><strong>Ethnicity: </strong>{this.props.selectedPrisoner.Ethnicity}</div>
        <div className="prisonerDetailField"><strong>Charges: </strong>{this.props.selectedPrisoner.Charges}</div>
        <div className="prisonerDetailField"><strong>Previous Convictions: </strong>{this.props.selectedPrisoner.previousConvictionCount}</div>
      </div>
      <div className="modalImageContainer">
        <img className="modalImage" src={this.props.selectedPrisoner.imageURL.replace(/\//g, '%3A').replace(/\?/g, '%3F') + '.jpeg'}/>
      </div>
      </div>

    );
  }
}

//connects redux actions to props
//
// <iframe src="http://www.lohud.com/story/news/local/westchester/yonkers/2017/03/15/yonkers-fire-hawley-apartments/99199648/"
//   width="100%"
//   height="90%"
//   marginLeft= "5%"
//   frameBorder="0"></iframe>
