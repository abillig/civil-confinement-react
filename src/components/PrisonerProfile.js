import React, { Component } from 'react';


export default class PrisonerProfile extends Component {

  render() {
    return (
      <h1>{this.props.selectedPrisoner.lastName}</h1>
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
