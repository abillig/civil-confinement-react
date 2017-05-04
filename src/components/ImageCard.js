import React, { Component } from 'react';


export default class PrisonerCard extends Component {

  openModal(){
    this.props.openModal();
    this.props.switchPrisoner(this.props.prisoner);
  }

  render() {
    const prisoner = this.props.prisoner;
    var prisonerClass = "card"
    var imageBackground = {backgroundImage: 'url(' + prisoner["imageURL"] + ')'}
    return (
      <div className={this.props.prisonerClass} onClick={this.openModal.bind(this)}>
        <img src={prisoner["imageURL"].replace(/\//g, '%3A').replace(/\?/g, '%3F') + '.jpeg'} className="image"/>

      </div>
    );
  }
}

//connects redux actions to props
