//  step-1 add click event handler////

 document.getElementById("btn-login").addEventListener("click" ,function(){
    // console.log("submit ok");
    // step -2 : get the email input ///
    /// always remember to use .value to get text from input field/////
    const emailField =document.getElementById('email-field');
    const email =emailField.value;
    
    // step 3;password input ////
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    // step 4: verify email and password ////

    if (email==="zahid.rayhan1848@gmail.com" &&  password==="htcM81848"){
          window.location.href='bank.html';

    }
    else {
        alert('please enter the correct user name and password');
    }
})