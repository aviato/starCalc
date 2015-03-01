var calcOutput = document.getElementById('calcOutput');

var calculator = {

  idArray: [],

  inputButtonArray:
  [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'leftPara',
    'rightPara',
    'divide',
    'times',
    'minus',
    'plus',
    'period'
  ],

  functionButtonArray: [
    'percent',
    'clear',
    'evaluate'
  ],

  inputBind: function(){
    inputNodeArray = [];
    for (var i = 0; i < calculator.inputButtonArray.length; i++) {
      var key = calculator.inputButtonArray[i];
      var getId = document.getElementById(key);
      inputNodeArray.push(getId);
    }

    for (var j = 0; j < inputNodeArray.length; j++) {
      var calcInput = inputNodeArray[j];
      console.log(calcInput);
      calcInput.addEventListener('click', function() {
        calcOutput.textContent += this.innerHTML;
     })
   }
  },

  functionBind: function(){
    functionNodeArray = [];
    for (var i = 0; i < calculator.functionButtonArray.length; i++){
      key = calculator.functionButtonArray[i];
      var getId = document.getElementById(key);
      functionNodeArray.push(getId);
    }

    functionNodeArray[0].addEventListener('click', function() {
      //calcDisplay.textContent = parseInt(toFixed(calcDisplay.textContent, 10));
    })

    functionNodeArray[1].addEventListener('click', function() {
        calcOutput.textContent = " ";
        console.log('clear button working');
    })
    functionNodeArray[2].addEventListener('click', function() {
      calcOutput.textContent = eval(calcOutput.textContent);
      console.log('eval button working');
    })
  }
}
calculator.inputBind();
calculator.functionBind();
