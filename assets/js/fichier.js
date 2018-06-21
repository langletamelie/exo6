function division (){
  //déclaration des variables
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  var regex = /^[0-9]+/;
  //calcul de la multiplication avec uniquement la décimal du premier nombre
  var result = firstNumber / secondNumber;
  if ((regex.test(firstNumber) == true) && (regex.test(secondNumber) == true)){
    alert(result);
  }else{
    //message d'erreur
    alert('uniquement des nombres');
  }

}
