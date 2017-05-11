import React, { Component } from 'react';
import PrisonerProfile from './PrisonerProfile';
import closeModal from '../actions/closeModal'
import { connect } from 'react-redux'

class Modal extends Component {

  render() {
    if (this.props.isModalOpen === false)
      return null

      let backdropStyle = {
        position: 'fixed',
        width: '100%',
        height: '100vh',
        overflowY: 'scroll',
        zIndex: '9998',
        background: 'rgba(255, 255, 255, 0.9)',
            }

      let closeButton = {
        position: 'absolute',
        top: '20px',
        right: '45px',
        fontSize: '60px',
        cursor: 'pointer',
        color: 'black'
      }

      return (
        <div>
          <div style={backdropStyle}>
            <div style={closeButton} onClick={e => this.close(e)}>&times;</div>
            <PrisonerProfile selectedPrisoner={this.props.selectedPrisoner}/>
          </div>
        </div>
      )
    }

    close(e) {
      e.preventDefault()
      this.props.closeModal()

    }
  }

  function mapStateToProps(state) {
    // debugger;
    return {
      selectedPrisoner: state.unfilteredApp.selectedPrisoner,
      isModalOpen: state.unfilteredApp.isModalOpen
    }
  }

  export default connect(mapStateToProps, {closeModal: closeModal})(Modal);
