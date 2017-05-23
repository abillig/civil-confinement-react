import React, { Component } from 'react';
import ImageCard from './ImageCard';
import Modal from './Modal';
import ToggleGroups from './ToggleGroups';
import { connect } from 'react-redux'

class FilterView extends Component {

  calculateAge(date){
    if (date >= 1988) {
      return "20-29"
    } else if (date >= 1978 && date < 1988) {
      return "30-39"
    } else if (date >= 1968 && date < 1978) {
      return "40-49"
    } else if (date >= 1958 && date < 1968) {
      return "50-59"
    } else if (date >= 1948 && date < 1958) {
      return "60-69"
    } else if (date < 1948) {
      return "70+"
    }
  }

  prisonerIsIncludedInFilteredGroup(prisoner){
    return   this.props.selectedGroup.race.includes(prisoner.Race)
    && this.props.selectedGroup.ethnicity.includes(prisoner.Ethnicity)
    && this.props.selectedGroup.age.includes(this.calculateAge(Number(prisoner.dateOfBirth.substring(prisoner.dateOfBirth.length - 4, prisoner.dateOfBirth.length))))
    && this.props.selectedGroup.risk.includes(String(prisoner.riskLevel))
  }

  render() {

    const imageCards = this.props.allPrisoners.map(prisoner => {
      return <ImageCard
        key={prisoner.name}
        prisonerClass = {this.prisonerIsIncludedInFilteredGroup(prisoner) ? "card" : "card darkened"}
        prisoner={prisoner} />;
  })

  const displayed = this.props.allPrisoners.filter(prisoner => {
    return this.prisonerIsIncludedInFilteredGroup(prisoner)
  })

  const headline = displayed.length === 321 ?
    "321 people are held under civil confinement in New York." : 'Of 321 people held under civil confinement in New York, ' + displayed.length + ' ('+ Math.round((displayed.length / 321) * 100) +'%)  are ' +
    this.props.explainerText.race +
    this.props.explainerText.risk +
    this.props.explainerText.ethnicity + ' offenders' + this.props.explainerText.age

    return (
      <div>
        <Modal/>

          <div id="headline">
            {headline}
          </div>
        <ToggleGroups/>

        <div className="cards">
          <br></br>
           {imageCards}
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  debugger;
  return {
    allPrisoners: state.unfilteredApp.allPrisoners,
    selectedGroup: state.selectedGroup,
    explainerText: state.explainerText
  }
}

export default connect(mapStateToProps, null)(FilterView);

// shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;
//
//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {
//
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//
//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//
//   return array;
// }
