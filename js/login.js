document.getElementById('button-login').addEventListener('click' , function(event){
    event.preventDefault();
    console.log('login button clicked');
    const phoneNumber= document.getElementById('phone-number').value;
    console.log(phoneNumber)
    const password= document.getElementById('password').value;
    console.log(password)
    if (phoneNumber==='5' && password==='1234'){
        console.log('You are logged in ')
        window.location.href = '/home.html';
    }
    else{
        alert('wrong phone number or pin')
    }
    
})