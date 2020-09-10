function averTotal() {
    let inputPhysics = prompt("input physics");
    let inputChemistry = prompt("input Chemistry");
    let inputBiology = prompt("input Biology");
    let p = parseInt(inputPhysics);
    let c = parseInt(inputChemistry);
    let b = parseInt(inputBiology);
    let a = (p + c + b) / 3;
    let t = p + c + b;
    document.getElementById("aver").innerHTML = "average is " + a;
    document.getElementById("total").innerHTML = "total is " + t;

}