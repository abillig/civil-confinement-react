export default function switchSelectedGroup(textString, category, allOption){
  return {
    type: 'SWITCH_SELECTED_GROUP',
    selectedGroup: textString,
    category: category,
    allOption: allOption
  }
}
