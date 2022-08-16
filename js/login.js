document.getElementById('btn-submit').addEventListener('click', function () {
    //get email id
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passField = document.getElementById('user-pass')
    const pass = passField.value;
    console.log(email);
    console.log(pass);

})