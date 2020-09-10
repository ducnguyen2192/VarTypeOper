function cirCircum(){
    let r = parseFloat(document.getElementById("inRad").value);
    let c = 2*r*Math.PI;
    document.getElementById("result").innerHTML = "Circumference of the circle is " + c;
}