import React, { Component } from 'react';
import ImageCard from './ImageCard';
import Modal from './Modal';
import { connect } from 'react-redux'
import openModal from '../actions/openModal'


class LandingPage extends Component {
  swapView(){
    this.props.swapView()
  }

  render() {

    const imageCards = this.props.allPrisoners.map(prisoner => {

      return <ImageCard
        key={prisoner.name}
        prisoner={prisoner}
        prisonerClass={"card"}/>;
  })


    return (
      <div>
      <div className="cards">
        <br></br>
        <div id="headline"><span>{this.props.allPrisoners.length}</span> {"people are held under New York's civil confinement law."}</div>

         {imageCards}

      </div>
      <Modal/>

      <div onClick={this.swapView.bind(this)}>Continue</div>
      </div>


    );
  }
}


function mapStateToProps(state) {
  // debugger;
  return {
    allPrisoners: state.unfilteredApp.allPrisoners
  }
}

// <Header />
// <Gallery contents={contentsObject} currentlySelected={this.state.selected}/>
//connects redux actions to props
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     getWantedList: getWantedList,
//     addPerson: addPerson,
//     clearToast: clearToast
//   }, dispatch);
// }

export default connect(mapStateToProps, null)(LandingPage);
