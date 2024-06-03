const inputNumberField = document.getElementById("input-number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");


let firstTime = true;

convertBtn.addEventListener("click", () => {
  
  if(firstTime)
  {
    output.style.display = "block";
    firstTime = false;
  }

  let outputMessage = "";

  if(inputNumberField.value === "")
  {
    outputMessage = "Please enter a valid number.";
    output.classList.add("invalid-input");
  }
  else
  {
    const inputNumber = parseInt(inputNumberField.value);
    
    if(inputNumber < 1) 
    {
      outputMessage = "Please enter a number greater than or equal to 1.";
      output.classList.add("invalid-input");
    }
    else if(inputNumber > 3999) 
    {
      outputMessage = "Please enter a number less than or equal to 3999.";
      output.classList.add("invalid-input");
    }
    else
    {
      output.classList.remove("invalid-input");
      outputMessage = convertToRoman(inputNumber, "");
    }
  }

  output.innerText = outputMessage;
});


const convertToRoman = (input, output) => {
  if(input === 0) return "";

  if(input < 5)
  {
    if(input === 4) output = "IV" + convertToRoman(input - 4, output);
    else output = "I" + convertToRoman(input - 1, output);
  }

  else if(input < 10)
  {
    if (input === 9) output = "IX" + convertToRoman(input - 9, output);
    else output = "V" + convertToRoman(input - 5, output);
  }

  else if(input < 50)
  {
    if(input >= 40) output = "XL" + convertToRoman(input - 40, output);
    else output = "X" + convertToRoman(input - 10, output);
  }

  else if(input < 100)
  {
    if(input >= 90) output = "XC" + convertToRoman(input - 90, output);
    else output = "L" + convertToRoman(input - 50, output);
  }

  else if(input < 500)
  {
    if(input >= 400) output = "CD" + convertToRoman(input - 400, output);
    else output = "C" + convertToRoman(input - 100, output);
  }

  else if(input < 1000)
  {
    if(input >= 900) output = "CM" + convertToRoman(input - 900, output);
    else output = "D" + convertToRoman(input - 500, output);
  }

  else output = "M" + convertToRoman(input - 1000, output);

  return output;
}