function passwordValidator()
{
  initialPW = document.getElementById('attempt1').value;
  confirmPW = document.getElementById('attempt2').value;
  if (initialPW.length < 8)
  {
    alert("Enter a password of at least length 8");
  }
  else if (initialPW !== confirmPW)
  {
    alert("Please check to see that the passwords match");
  }
  else
  {
    alert("Passwords match");
  } 
};