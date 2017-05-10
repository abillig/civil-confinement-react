export default function switchSelectedPrisoner(prisoner){
  return {
    // debugger; 
    type: 'SWITCH_SELECTED_PRISONER',
    prisoner: prisoner
  }
}
