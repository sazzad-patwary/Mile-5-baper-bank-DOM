// submit button 
document.getElementById('login-submit').addEventListener('click', function () {
    // get user email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    // get user password 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'sontan@bapp.com' && userPassword == 'pass') {
        // console.log('valid user');
        window.location.href = 'banking.html';
    }
})