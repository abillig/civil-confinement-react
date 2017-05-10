import { combineReducers } from 'redux'
import prisonerCollection from './prisonerCollection.js';
import { OPEN_MODAL } from './actions/openModal'
import { SWITCH_SELECTED_PRISONER } from './actions/switchSelectedPrisoner'

// const { SHOW_ALL } = VisibilityFilters

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
  age: ""
}

var selectedGroupInitial = {
    race: ["All races", "Black", ""],
    ethnicity: ["All ethnicities", "White", "Not Hispanic", "Hispanic", "Unknown", ""],
    age: ["All ages", "20-29", "30-39", "40-49", "50-59", "60-69", "70+", ""]
}

function selectedGroup(state=selectedGroupInitial, action) {
  switch (action.type) {
    case 'SWITCH_SELECTED_GROUP':
      var newObject = {}
      var allCategories = {"race": ["All races", "White", "Black", "Indian", "Other", "Unknown", ""],
                            "ethnicity": ["All ethnicities", "White", "Not Hispanic", "Hispanic", "Unknown", ""],
                            "age": ["All ages", "20-29", "30-39", "40-49", "50-59", "60-69", "70+", ""]}
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
      var introText = {"race": "", "ethnicity": " ", "age": " between the ages of "}
      if(action.allOption === action.selectedGroup) {
        newObject[action.category] = ""
        return Object.assign({}, state, newObject)
      } else {
        newObject[action.category] = introText[action.category] + action.selectedGroup
        return Object.assign({}, state, newObject)
      }
    default:
    return state
  }
}

//
// function todos(state = [], action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return [
//         ...state,
//         {
//           text: action.text,
//           completed: false
//         }
//       ]
//     case TOGGLE_TODO:
//       return state.map((todo, index) => {
//         if (index === action.index) {
//           return Object.assign({}, todo, {
//             completed: !todo.completed
//           })
//         }
//         return todo
//       })
//     default:
//       return state
//   }
// }

const reactApp = combineReducers({
  // visibilityFilter,
  selectedGroup, unfilteredApp, explainerText
})

export default reactApp
