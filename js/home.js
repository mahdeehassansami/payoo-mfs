// add money to the account
document.getElementById('btn-add-money')
// step -1 Add an event handler to the add money button inside the form
.addEventListener('click', function(event){
    event.preventDefault();
    const addMoneyInput=document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    const pinNumberInput=document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);
    if(pinNumberInput==='1234'){
        console.log('adding money to your account');
        const balance=document.getElementById('balance').innerText
        console.log("balance", balance);
        const addMoneynumber=parseFloat(addMoneyInput);
        const balanceNumber=parseFloat(balance);
        console.log("balance", balanceNumber);

        const newBalance = addMoneynumber + balanceNumber;
        console.log(newBalance);
        document.getElementById('balance').innerText=newBalance;

    }
    else{
        console.log('Failed to add money');
    }
})


// Cash out
document.getElementById('btn-cashout')
// step -1 Add an event handler to the add money button inside the form
.addEventListener('click', function(event){
    event.preventDefault();
    const cashOutInput=document.getElementById('input-cashout').value;
    console.log(cashOutInput);
    const pinNumberInput=document.getElementById('input-cashoutpin-number').value;
    console.log(pinNumberInput);
    if(pinNumberInput==='1234'){
        console.log('Cash out money');
        const balance=document.getElementById('balance').innerText
        console.log("balance", balance);
        const cashOutNumber=parseFloat(cashOutInput);
        const balanceNumber=parseFloat(balance);
        console.log("balance", balanceNumber);

        const newBalance = -cashOutNumber + balanceNumber;
        console.log(newBalance);
        document.getElementById('balance').innerText=newBalance;

    }
    else{
        console.log('Failed to Cash Out money');
    }
})