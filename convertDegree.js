function conDe(){
    let cel = +document.getElementById("celDe").value;
    let fah = ((cel/5)*9)+32;
    document.getElementById("result").innerHTML = "fahrenheit is " + fah;
}