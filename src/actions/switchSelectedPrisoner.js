export default function switchSelectedPrisoner(prisoner){
  return {
    type: 'SWITCH_SELECTED_PRISONER',
    prisoner: prisoner
  }
}
