function formValidation()
{
let fullname = document.getElementById('fn');
let username= document.getElementById('un');
let email = document.getElementById('em');
let password = document.getElementById('pw');
let confirmpassword = document.getElementById('cw');

if (password.value.length > 7 && password.value.length < 17)
{
    alert('Password successful!');
    console.log('Your fullname is ${fullname}');
    console.log('Your username is ${username}');
    console.log('Your email is ${email}');
    console.log('Your password is ${password}');
    console.log('Your confirmpassword is ${confirmpassword}');
} else {
    alert('Your password must be between 8 and 16!');
}

if (confirmpassword.value.length > 7 && confirmpassword.value.length < 17)
{
    alert('Confirm password successful!');
    console.log('Your fullname is ${fullname}');
    console.log('Your username is ${username}');
    console.log('Your email is ${email}');
    console.log('Your password is ${password}');
    console.log('Your confirmpassword is ${confirmpassword}');
} else {
    alert('Your password must be between 8 and 16!');
}

if(password != confirmpassword)
{
    alert('passwords do not match');
}
}