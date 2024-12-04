//Question 1
function greetUser(){
    
    let inputValue= document.getElementById('FirstName').value;
    document.getElementById('inputName').innerText ="Hello," + inputValue;
}

// Question 2
function changeMessage() {
    
    document.getElementById('message').innerText = "Hello, World!";
}
  
//Question 3
function addNumbers() {
   
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = num1 + num2;
    document.getElementById('result').innerText = `Result: ${sum}`;
  }

//Question 4
function updateTitle() {
    
    const newTitle = document.getElementById('titleInput').value;
    document.getElementById('title').innerText = newTitle;
}
  
//Question 5
function concatenateStrings() {
    
    const string1 = document.getElementById('string1').value;
    const string2 = document.getElementById('string2').value;
    document.getElementById('combinedText').innerText = string1 + string2;
}

