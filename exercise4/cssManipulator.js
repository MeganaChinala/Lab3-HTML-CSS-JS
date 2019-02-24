
function RGBManipulate() 
{
    let RV = document.getElementById("RV").value;
    let GV = document.getElementById("GV").value;
    let BV = document.getElementById("BV").value;
    let width = document.getElementById("WV").value;
    let backR = document.getElementById("backR").value;
    let backG = document.getElementById("backG").value;
    let backB = document.getElementById("backB").value;
    let changed = document.getElementById("changedText");

    changed.style.borderColor = 'rgb(' + RV + ',' + GV + ',' + BV + ')';
    changed.style.width = width;
    changed.style.backgroundColor = 'rgb(' + backR + ',' + backG + ',' + backB + ')';
}