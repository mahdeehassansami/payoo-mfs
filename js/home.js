// add money to the account
document.getElementById('btn-add-money')
// step -1 Add an event handler to the add money button inside the form
.addEventListener('click', function(event){
    event.preventDefault
    const addMoneyInput=document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
})