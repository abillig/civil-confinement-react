import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import ImageCard from './ImageCard';
import Modal from './Modal';
import ToggleGroups from './ToggleGroups';



export default class FilterView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedPrisoner: this.props.prisoners[0],
      // isModalOpen: false,
      explainerText: {race: " Black",
                      ethnicity: "",
                      age: ""},
      selectedGroup: {race: ["All races", "Black"],
        ethnicity: ["All ethnicities", "White", "Not Hispanic", "Hispanic", "Unknown"],
        age: ["All ages", "20-29", "30-39", "40-49", "50-59", "60-69", "70+"]
      },
      categoriesAndOptions: {
        races: ["All races", "White", "Black", "Other", "Unknown"],
        ethnicities: ["All ethnicities", "Not Hispanic", "Hispanic", "Unknown"],
        ages: ["All ages", "20-29", "30-39", "40-49", "50-59", "60-69", "70+"]
      }
    };
  }

  selectCategory(option) {
      for (var category in this.state.categoriesAndOptions) {
        if (this.state.categoriesAndOptions[category].includes(option)){
          return category
        }
      }
    }

// filterPrisoners(textString){
//   if (this.state.categoriesAndOptions[selectCategory(textString)].includes(textString)){
//     this.setState(
//       { selectedGroup:
//         Object.assign(
//           {},
//           this.state.selectedGroup,
//           {selectCategory(textString): this.state.categoriesAndOptions[selectCategory(textString)].map(group) => {
//                 if (textString === this.state.categoriesAndOptions[selectCategory(textString)][0]){
//                   return group
//                 }
//                else if (group === textString){
//                  return textString
//                }
//              }
//            }
//          )
//        }
//      )
//    }
//  }

  winnowPrisonerCount(){
    this.props.winnowPrisonerCount(this.state.selectedGroup)
  }


  switchSelectedGroup(textString){
    var newExplainerText = this.state.explainerText
    if(["All races", "White", "Black", "Indian", "Other", "Unknown"].includes(textString)){
      this.setState({ selectedGroup: Object.assign({}, this.state.selectedGroup, {race: ["All races", "White", "Black", "Indian", "Other", "Unknown"].map((group) => {
         if (textString === "All races"){
           newExplainerText.race = ""
           return group
         }
        else if (group === textString){
          newExplainerText.race = textString
          return textString
        }
      })})

    })
  }
    if(["All ethnicities", "Not Hispanic", "Hispanic"].includes(textString)){
      this.setState({ selectedGroup: Object.assign({}, this.state.selectedGroup, {ethnicity: ["All ethnicities", "Not Hispanic", "Hispanic", "Unknown"].map((group) => {
        if (textString === "All ethnicities"){
          newExplainerText.ethnicity = ""
          return group
        }
       else if (group === textString){
         newExplainerText.ethnicity = " " + textString
          return textString
        }
      })})

    })

    }
    if(["All ages", "20-29", "30-39", "40-49", "50-59", "60-69", "70+"].includes(textString)){
      this.setState({ selectedGroup: Object.assign({}, this.state.selectedGroup, {age: ["All ages", "20-29", "30-39", "40-49", "50-59", "60-69", "70+"].map((group) => {
        if (textString === "All ages"){
          newExplainerText.age = ""
          return group
        }
       else if (group === textString){
         newExplainerText.age = " between the ages of " + textString
          return textString
        }
      })})

    }
)

  }
  this.setState({explainerText: newExplainerText})
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

  prisonerIsIncludedInFilteredGroup(prisoner){
    return   this.state.selectedGroup.race.includes(prisoner.Race)
    && this.state.selectedGroup.ethnicity.includes(prisoner.Ethnicity)
    && this.state.selectedGroup.age.includes(this.calculateAge(Number(prisoner.dateOfBirth.substring(prisoner.dateOfBirth.length - 4, prisoner.dateOfBirth.length))))
  }

  render() {


    const imageCards = this.props.prisoners.map(prisoner => {
      // this.setState({displayed: this.state.displayed += 1 })
      return <ImageCard
        switchPrisoner = {this.props.switchPrisoner}
        openModal={this.props.openModal}
        key={prisoner.name}
        prisonerClass = {this.prisonerIsIncludedInFilteredGroup(prisoner) ? "card" : "card darkened"}
        prisoner={prisoner} />;

  })

  const displayed = this.props.prisoners.filter(prisoner => {
    return this.prisonerIsIncludedInFilteredGroup(prisoner)
  })

  const headline = displayed.length === 313 ?
    "317 people are held under civil confinement in New York." : 'Of 317 people held under civil confinement in New York, ' + displayed.length + '  are ' + this.state.explainerText.race + this.state.explainerText.ethnicity + this.state.explainerText.age

    return (
      <div>
      <Modal selectedPrisoner={this.props.selectedPrisoner} isOpen={this.props.isModalOpen} onClose={this.props.closeModal}/>

        <div id="headline">
          {headline}
        </div>
      <ToggleGroups switchGroup = {this.switchSelectedGroup.bind(this)}/>

      <div className="cards">
        <br></br>
         {imageCards}
      </div>


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
