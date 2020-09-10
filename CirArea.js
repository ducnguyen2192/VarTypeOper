function CirArea() {
    let r = parseInt(document.getElementById("inRad").value);
    let a = r*r*Math.PI;
    document.getElementById("result").innerHTML = "Area of the circle is " + a;
}