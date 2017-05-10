import React, { Component } from 'react';
import { connect } from 'react-redux'
import openModal from '../actions/openModal'
import switchSelectedPrisoner from '../actions/switchSelectedPrisoner'

class PrisonerCard extends Component {

  openModal(){
    this.props.openModal();
    this.props.switchSelectedPrisoner(this.props.prisoner);
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

function mapStateToProps(state) {
  return {
    allPrisoners: state.unfilteredApp.allPrisoners,
    prisonersInView: state.unfilteredApp.prisonersInView,
    selectedPrisoner: state.unfilteredApp.selectedPrisoner,
    isModalOpen: state.unfilteredApp.isModalOpen
  }
}
export default connect(mapStateToProps, {openModal: openModal, switchSelectedPrisoner: switchSelectedPrisoner})(PrisonerCard);
