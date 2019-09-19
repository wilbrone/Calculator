// function add(number1, number2) {
//   return number1 + number2;
// };

// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = add(number1, number2);
// alert(result);

// function bmi(weight, height){
//   return weight * 703 / height;
// }

// var weight = parseInt(prompt("Enter your weight:"));
// var height = parseInt(prompt("Enter your height:"))
// var result = bmi(weight, height);

// alert("Your BMI is " + result)

// var enoughSleep = true;
// if (enoughSleep) {
//   console.log("I'm ready to go!");
// } else {
//   console.log("I need a nap.");
// }
// function greeting(name, toSay){
// 	return name + toSay;
// }

// greeting("wil", "hello");
// alert(greeting(name, toSay));


// var temperature = prompt("Enter the temperature: ");
// var rainny = confirm("Is it raining: ");

// if (temperature <=25 && rainny ==true){
//   alert("put on gum-boots");
// } else if(temperature >25<=50 && rainny ==false){
//   alert("Beware")
// }else{
//   alert("get a life");
// }
// 
// Start of the prac
function formValidate(){
  var intro = document.querySelector('input[name="first"]:checked').value; 
  var extro = document.querySelector('input[name="sec"]:checked').value; 
  console.log(intro);
  console.log(extro);

  if(intro=="introvert" && extro=="indoor"){
    document.write("cat");
  }else{
    alert("dog")
  }
}

