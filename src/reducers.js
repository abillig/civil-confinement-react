import { combineReducers } from 'redux'
import prisonerCollection from './prisonerCollection.js';
import { OPEN_MODAL } from './actions/openModal'
import { SWITCH_SELECTED_PRISONER } from './actions/switchSelectedPrisoner'

var initialState = {
  showOpener: true,
  selectedPrisoner: prisonerCollection[0],
  isModalOpen: false,
  prisonersInView: prisonerCollection,
  allPrisoners: prisonerCollection
};

function unfilteredApp(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return Object.assign({}, state, {isModalOpen: true})
    case 'CLOSE_MODAL':
      return Object.assign({}, state, {isModalOpen: false})
    case 'SWITCH_SELECTED_PRISONER':
      return Object.assign({}, state, {selectedPrisoner: action.prisoner})
    default:
      return state
  }
}

var explainerTextInitial = {
  race: "Black",
  ethnicity: "",
  age: "",
  risk: ""
}

var selectedGroupInitial = {
    race: ["All races", "Black", ""],
    ethnicity: ["All ethnicities", "White", "Not Hispanic", "Hispanic", "Unknown", ""],
    age: ["All ages", "20-29", "30-39", "40-49", "50-59", "60-69", "70+", ""],
    risk: ["All risk levels", "2", "3"]
}

function selectedGroup(state=selectedGroupInitial, action) {
  switch (action.type) {
    case 'SWITCH_SELECTED_GROUP':
      var newObject = {}
      var allCategories = {"race": ["All races", "White", "Black", "Indian", "Other", "Unknown", ""],
                            "ethnicity": ["All ethnicities", "White", "Not Hispanic", "Hispanic", "Unknown", ""],
                            "age": ["All ages", "20-29", "30-39", "40-49", "50-59", "60-69", "70+", ""],
                            "risk": ["All risk levels", "2", "3"]}
      if(action.allOption === action.selectedGroup) {
        newObject[action.category] = allCategories[action.category]
      } else {
        newObject[action.category] = [action.allOption, action.selectedGroup, ""]
      }
      return Object.assign({}, state, newObject)
    default:
      return state
  }
}

function explainerText(state = explainerTextInitial, action) {
  switch (action.type){
    case 'SWITCH_EXPLAINER_TEXT':
      var newObject = {}
      var introText = {"race": "", "ethnicity": " ", "age": " between the ages of ", "risk": " level "}
      if(action.allOption === action.selectedGroup) {
        newObject[action.category] = ""
        return Object.assign({}, state, newObject)
      } else {
        if(action.selectedGroup === "70+"){
          newObject[action.category] = " over 70"
        } else if (action.category === "age"){
          newObject[action.category] = introText[action.category] + action.selectedGroup.replace(/-/g, ' and ')
        }else {
          newObject[action.category] = introText[action.category] + action.selectedGroup
        }
        return Object.assign({}, state, newObject)
      }
    default:
    return state
  }
}

const reactApp = combineReducers({
  selectedGroup, unfilteredApp, explainerText
})

export default reactApp
