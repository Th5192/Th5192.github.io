const initialValueSubmit = document.querySelector('.initialValueSubmit')
const initialValueField = document.querySelector('.initialValueField')
const finalValue = document.querySelector('.finalValue')

initialValueSubmit.addEventListener('click', calculateCagr)

function calculateCagr() {
    const initialValue = Number(initialValueField.value)
    let calculatedFinalValue = initialValue*(1.11 ** 20)
    finalValue.textContent = 'In 20 years this will equal: ' + calculatedFinalValue
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }