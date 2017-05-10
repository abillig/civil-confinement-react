export default function switchSelectedGroup(textString, category, allOption){
  return {
    // debugger;
    type: 'SWITCH_SELECTED_GROUP',
    selectedGroup: textString,
    category: category,
    allOption: allOption
  }
}
