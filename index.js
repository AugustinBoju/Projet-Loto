const checkLoto = (first_name, last_name, email, numbers) => {
  var notice_first_name;
​  var first_name = document.getElementById("first_name").value;
  if (first_name == "" || first_name == undefined ) {
    notice_first_name = "Prénom !!";
    document.getElementById("notice_first_name").innerHTML = notice_first_name;
  }
​
  var notice_last_name;
  var last_name = document.getElementById("last_name").value;
  if (last_name == "" || last_name == undefined ) {
    notice_last_name = "Nom !!";
    document.getElementById("notice_last_name").innerHTML = notice_last_name;
  }
​
  var notice_email, notice_length_email, notice_syntax_email;
​  var email = document.getElementById("email").value;
  var reg_syntax_email = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,3}$/;
  var resultat = reg_syntax_email.test(email);
​
  if (email == "" || email == undefined ) {
    notice_email = "Email !!";
    document.getElementById("notice_email").innerHTML = notice_email;
  }

  else if (email.length < 8 || email.length >= 30) {
    notice_length_email = "Entre 8 et 30 caractères requis";
    document.getElementById("notice_length_email").innerHTML = notice_length_email;
  }
  else {
  }

  if (resultat == false ) {
    notice_syntax_email = "'@' et '.' requis";
    document.getElementById("notice_syntax_email").innerHTML = notice_syntax_email;
  }

  var num1, num2, num3, num4, num5, num6;
  num1 = document.getElementById("number1").value;
  num2 = document.getElementById("number2").value;
  num3 = document.getElementById("number3").value;
  num4 = document.getElementById("number4").value;
  num5 = document.getElementById("number5").value;
  num6 = document.getElementById("number6").value;
​
  var numbers = [num1, num2, num3, num4, num5, num6]
  if ((num1 == "" || num1 == undefined) || (num2 == "" || num2 == undefined) || (num3 == "" || num3 == undefined) || (num4 == "" || num4 == undefined) || (num5 == "" || num5 == undefined) || (num6 == "" || num6 == undefined) ) {
    notice_number = "Manque des numéros !!";
    document.getElementById("notice_number").innerHTML = notice_number;
  }
​
    var Int1 = 10;
    var Int2 = 20;
    var Int3 = 30;
    var Int4 = 40;
    var Int5 = 50;
    var Int6 = 60;
    var solution = [Int1, Int2, Int3, Int4, Int5, Int6]

    if (numbers == solution) {
      win = "Félicitations vous avez gagné 1 million !!!!!";
      document.getElementById("win").innerHTML = win;
    }
    else {
      loose = "Perdu !!!!!"
      document.getElementById("loose").innerHTML = loose;
      }
    }
