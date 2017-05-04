import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import ImageCard from './ImageCard';
import Modal from './Modal';
import ToggleGroups from './ToggleGroups';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPrisoner: this.props.prisoners[0],
      isModalOpen: false,
      selectedGroup: {race: ["All races", "White", "Black", "Other"],
        ethnicity: ["All ethnicities", "White", "Not Hispanic", "Hispanic"],
        age: ["All ages", "20-29", "30-39", "40-49", "50-59", "60-69", "70+"],
        explainerText: ""
      }
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

  switchSelectedGroup(textString){
    if(["All races", "White", "Black", "Other", "Unknown"].includes(textString)){
      this.setState({ selectedGroup: Object.assign({}, this.state.selectedGroup, {race: ["All races", "White", "Black", "Other", "Unknown"].map((group) => {
         if (textString === "All races"){
           return group
         }
        else if (group === textString){
          return textString
        }
      })})

      })
  }
    if(["All ethnicities", "Not Hispanic", "Hispanic"].includes(textString)){
      this.setState({ selectedGroup: Object.assign({}, this.state.selectedGroup, {ethnicity: ["All ethnicities", "Not Hispanic", "Hispanic"].map((group) => {
        if (textString === "All ethnicities"){
          return group
        }
       else if (group === textString){
          return textString
        }
      })})

      })
    }
    if(["All ages", "20-29", "30-39", "40-49", "50-59", "60-69", "70+"].includes(textString)){
      this.setState({ selectedGroup: Object.assign({}, this.state.selectedGroup, {age: ["All ages", "20-29", "30-39", "40-49", "50-59", "60-69", "70+"].map((group) => {
        if (textString === "All ages"){
          return group
        }
       else if (group === textString){
          return textString
        }
      })})

      })
  }
  }
  // renderArticles() {
  //   if(this.props.articles) {
  //     return this.props.articles.map(article => {
  //       return <ArticleCard
  //         switchArticle = {this.switchSelectedArticle.bind(this)}
  //         openModal={this.openModal.bind(this)}
  //         key={article.name}
  //         article={article} />;
  //     });
  //   } else {
  //     return 'here would go a loading spinner';
  //   }
  // }
  calculateAge(date){
    if (date > 1988) {
      return "20-29"
    } else if (date > 1978 && date <= 1988) {
      return "30-39"
    } else if (date > 1968 && date <= 1978) {
      return "40-49"
    } else if (date > 1958 && date <= 1968) {
      return "50-59"
    } else if (date > 1947 && date <= 1958) {
      return "60-69"
    } else if (date <= 1947) {
      return "70+"
    }
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  render() {




    const imageCards = this.props.prisoners.map(prisoner => {
      // this.setState({displayed: this.state.displayed += 1 })
      if(this.state.selectedGroup.race.includes(prisoner.Race)
      && this.state.selectedGroup.ethnicity.includes(prisoner.Ethnicity)
      && this.state.selectedGroup.age.includes(this.calculateAge(Number(prisoner.dateOfBirth.substring(prisoner.dateOfBirth.length - 4, prisoner.dateOfBirth.length))))
    ){
      return <ImageCard
        switchPrisoner = {this.switchSelectedPrisoner.bind(this)}
        openModal={this.openModal.bind(this)}
        key={prisoner.name}
        prisoner={prisoner} />;
    }
  })

    return (
      <div>

      <div id="headline"><span>{this.props.prisoners.length}</span> {"people are held under New York's civil confinement law."}</div>

      {this.state.explainerText}

      <Modal selectedPrisoner={this.state.selectedPrisoner} isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}/>

      <div className="cards">
        <br></br>
         {imageCards}
      </div>

      <ToggleGroups switchGroup = {this.switchSelectedGroup.bind(this)}/>

      </div>
    );
  }
}


//connects root reducer to props
// function mapStateToProps(state) {
//   return {
//     articles: state.articles,
//   }
// }

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

// export default connect(mapStateToProps, null)(App);
