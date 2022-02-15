const initialValueSubmit = document.querySelector('.initialValueSubmit')
const initialValueField = document.querySelector('.initialValueField')
const finalValue = document.querySelector('.finalValue')

initialValueSubmit.addEventListener('click', calculateCagr)

function calculateCagr() {
    const initialValue = Number(initialValueField.value)
    let calculatedFinalValue = initialValue*(1.11 ** 20)
    finalValue.textContent = 'In 20 years this will equal: ' + calculatedFinalValue
}


