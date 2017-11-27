export function showDietaryForm(stressLevel, currentComponent) {
  return {
    type: "SHOW_DIETARY_FORM",
    stressLevel, currentComponent
  };
}
//
// export function lowStress() {
//     return {
//         type: "LOW_STRESS"
//     };
// }
