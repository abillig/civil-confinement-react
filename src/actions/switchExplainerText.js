export default function switchExplainerText(textString, category, allOption){
  return {
    type: 'SWITCH_EXPLAINER_TEXT',
    selectedGroup: textString,
    category: category,
    allOption: allOption
  }
}
