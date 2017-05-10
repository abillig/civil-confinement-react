export default function switchExplainerText(textString, category, allOption){
  return {
    // debugger;
    type: 'SWITCH_EXPLAINER_TEXT',
    selectedGroup: textString,
    category: category,
    allOption: allOption
  }
}
