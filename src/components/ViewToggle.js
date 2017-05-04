import React, { Component } from 'react';
import LandingPage from './LandingPage';
import FilterView from './FilterView';



export default class ViewToggle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showOpener: true,
      selectedPrisoner: this.props.prisoners[0],
      isModalOpen: false,
      prisonersInView: this.props.prisoners,
    };
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  switchSelectedPrisoner(prisonerObject){
    // debugger;
    this.setState({ selectedPrisoner: prisonerObject })
  }

  swapView(){
    this.setState({showOpener: !this.state.showOpener})
  }

  updatePrisonersInView(category, values){
    this.props.prisoners.filter((element) =>{
      values.includes(element[category])
    })
  }

  winnowPrisonerCount(object){
    this.setState({prisonersInView: this.props.prisoners.filter(function(prisoner){
      debugger; 
      object["race"].includes(prisoner.Race) && object["ethnicity"].includes(prisoner.Ethnicity)
    })})
  }


  render() {
    const viewToggle = this.state.showOpener ?
     <LandingPage prisoners={this.props.prisoners}
      switchPrisoner = {this.switchSelectedPrisoner.bind(this)}
      openModal = {this.openModal.bind(this)}
      selectedPrisoner = {this.state.selectedPrisoner}
      isModalOpen = {this.state.isModalOpen}
      closeModal = {this.closeModal.bind(this)}
      swapView = {this.swapView.bind(this)}/> :
     <FilterView prisoners={this.props.prisoners} switchPrisoner = {this.switchSelectedPrisoner.bind(this)} openModal = {this.openModal.bind(this)}
       selectedPrisoner = {this.state.selectedPrisoner}
       isModalOpen = {this.state.isModalOpen}
       closeModal = {this.closeModal.bind(this)}
       winnowPrisonerCount = {this.winnowPrisonerCount.bind(this)}
       prisonersInView = {this.state.prisonersInView}
       />

    return (
      <div>
      {viewToggle}
      </div>
    );
  }
}
