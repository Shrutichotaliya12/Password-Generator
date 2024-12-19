let inputSlider = document.getElementById("slider");
let slidervalue = document.getElementById("slidervalue");
let passBox = document.getElementById("passBox");
let Lowercase = document.getElementById("Lowercase");
let Uppercase = document.getElementById("Uppercase");
let Number = document.getElementById("Number");
let Symbols = document.getElementById("Symbols");
let genbtn = document.getElementById("genbtn");
let copyIcon = document.getElementById("icon")


slidervalue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () =>{
  slidervalue.textContent = inputSlider.value;
});


genbtn.addEventListener('click', () =>{
  passBox.value = generatePassword();
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let number = "0123456789";
let symbols = "~!@#$%^&*"

function generatePassword(){ 
  let genpass = "";
  let allChars = "";

  allChars += Lowercase.checked ? lowerChars : "";
  allChars += Uppercase.checked ? upperChars : "";
  allChars += Number.checked ? number : "";
  allChars += Symbols.checked ? symbols: "";

  if(allChars == "" || allChars.length == 0){
    return genpass
  }

  for(let i=1; i<=inputSlider.value; i++){
    genpass += allChars.charAt(Math.floor(Math.random()*allChars.length));
  }
    return genpass;
}
copyIcon.addEventListener('click', () =>{
  if(passBox.value != "" || passBox.value.length >=1){
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText = "check";
    copyIcon.title = "Password Copies";

    setTimeout(() => {
      copyIcon.innerHTML= "content_copy";
      copyIcon.title = ""
    }, 3000);
  }
})