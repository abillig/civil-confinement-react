import React, { Component } from 'react';
import LandingPage from './LandingPage';
import FilterView from './FilterView';
import { connect } from 'react-redux'
import openModal from '../actions/openModal'



export default class ViewToggle extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showOpener: true,
  //     selectedPrisoner: this.props.prisoners[0],
  //     isModalOpen: false,
  //     prisonersInView: this.props.prisoners,
  //   };
  // }

  // openModal() {
  //   this.setState({ isModalOpen: true })
  // }
  //
  // closeModal() {
  //   this.setState({ isModalOpen: false })
  // }
  //
  // switchSelectedPrisoner(prisonerObject){
  //   // debugger;
  //   this.setState({ selectedPrisoner: prisonerObject })
  // }

  // swapView(){
  //   this.setState({showOpener: !this.state.showOpener})
  // }

  updatePrisonersInView(category, values){
    this.props.prisoners.filter((element) =>{
      values.includes(element[category])
    })
  }

  // winnowPrisonerCount(object){
  //   this.setState({prisonersInView: this.props.prisoners.filter(function(prisoner){
  //     debugger;
  //     object["race"].includes(prisoner.Race) && object["ethnicity"].includes(prisoner.Ethnicity)
  //   })})
  // }


  render() {
    // debugger;
    // const viewToggle = this.state.showOpener ?
     const viewToggle = <FilterView />
      // prisoners={this.props.allPrisoners}
      // switchPrisoner = {this.switchSelectedPrisoner.bind(this)}
      // openModal = {this.props.openModal}
      // selectedPrisoner = {this.props.selectedPrisoner}
      // isModalOpen = {this.props.isModalOpen}
      // closeModal = {this.closeModal.bind(this)}
      // swapView = {this.swapView.bind(this)}

    //   :
    //  <FilterView prisoners={this.props.allPrisoners}
    //   // switchPrisoner = {this.switchSelectedPrisoner.bind(this)}
    //   // openModal = {this.openModal.bind(this)}
    //    selectedPrisoner = {this.props.selectedPrisoner}
    //    isModalOpen = {this.props.isModalOpen}
    //   //  closeModal = {this.closeModal.bind(this)}
    //   //  winnowPrisonerCount = {this.winnowPrisonerCount.bind(this)}
    //    prisonersInView = {this.props.prisonersInView}
    //    />

    return (
      <div>
      {viewToggle}
      </div>
    );
  }

}

//connects root reducer to props
// function mapStateToProps(state) {
//   // debugger;
//   return {
//     allPrisoners: state.unfilteredApp.allPrisoners,
//     prisonersInView: state.unfilteredApp.prisonersInView,
//     selectedPrisoner: state.unfilteredApp.selectedPrisoner,
//     isModalOpen: state.unfilteredApp.isModalOpen
//   }
// }
//
// // <Header />
// // <Gallery contents={contentsObject} currentlySelected={this.state.selected}/>
// //connects redux actions to props
// // function mapDispatchToProps(dispatch) {
// //   return bindActionCreators({
// //     getWantedList: getWantedList,
// //     addPerson: addPerson,
// //     clearToast: clearToast
// //   }, dispatch);
// // }
//
// export default connect(mapStateToProps, {openModal: openModal})(ViewToggle);
