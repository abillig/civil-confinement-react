import React, { Component } from 'react';
import ImageCard from './ImageCard';
import Modal from './Modal';


export default class LandingPage extends Component {
  swapView(){
    this.props.swapView()
  }

  render() {
    const imageCards = this.props.prisoners.map(prisoner => {
      // this.setState({displayed: this.state.displayed += 1 })

      return <ImageCard
        switchPrisoner = {this.props.switchPrisoner}
        openModal={this.props.openModal}
        key={prisoner.name}
        prisoner={prisoner}
        prisonerClass={"card"}/>;

  })


    return (
      <div>
      <div className="cards">
        <br></br>
        <div id="headline"><span>{this.props.prisoners.length}</span> {"people are held under New York's civil confinement law."}</div>

         {imageCards}

      </div>
      <Modal selectedPrisoner={this.props.selectedPrisoner} isOpen={this.props.isModalOpen} onClose={this.props.closeModal}/>

      <div onClick={this.swapView.bind(this)}>Continue</div>
      </div>


    );
  }
}
