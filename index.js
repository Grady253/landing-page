let loginForm = document.getElementById('form');

    
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let userEmail = document.getElementById('email');

    if (userEmail.value === "" ){
        alert('User Email required.');
    }else{
        alert('User email successfully submitted.');
        console.log(` ${userEmail.value} want's a notification when the application is finished.`);
    }

    userEmail.value = "";
});
