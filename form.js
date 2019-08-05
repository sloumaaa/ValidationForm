function vide() {
    if ((texxt.value == "") || (adres.value == "") || (emmail.value == "") || (pass.value == "") || (comment.value == ""))
        alert('One of the inputs is empty');
}
function passe() {
    var str = pass.value;
    if (str.length < 8)
        alert('The password has less than 8 characters');
}
function mail() {
    var str = emmail.value;
    if (!str.includes("@"))
        alert('Doesn"t have a valid e-mail adress')
}
function passe2() {
VPassword(pass)
}
function VPassword(pass)
{
  if(pass.value.length<6) {
    alert("Error: Password must contain at least six characters!");
   pass.focus();
    return false;
  }
  charr =/[0-9]/;
  if(!charr.test(pass.value)) {
    alert("Error: password must contain at least one number!");
   pass.focus();
    return false;
  }
  charr =/[a-z]/;
  if(!charr.test(pass.value)) {
    alert("Error: password must contain at least one lowercase letter!");
    pass.focus();
    return false;
  }
  charr =/[A-Z]/;
  if(!charr.test(pass.value)) {
    alert("Error: PassWord must contain at least one uppercase letter!");
    pass.focus();
    return false;
  }
}