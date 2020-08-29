let canvas = document.getElementById("sandbox"),
context = canvas.getContext("2d"),
circle, line = new Path2D(), boltLine = new Path2D();

let R = 150;
let R1 = 200;

for(let d = 0; d < 60; ++d) {
    let angle = (d/60) * 2 * Math.PI;
    let Px = Math.cos(angle) * R;
    let Py = -Math.sin(angle) * R;
    let Qx = 0.9 * Px;
    let Qy = 0.9 * Py;

    Px += R1; Py += R1;
    Qx += R1; Qy += R1;

    if(d == 0 || (d % 5 == 0)) {
        boltLine.moveTo(Px, Py);
        boltLine.lineTo(Qx, Qy);
    }
    else {
        line.moveTo(Px, Py);
        line.lineTo(Qx, Qy);
    }
}

// Стрелки

function drawWatch () {
    context.clearRect(0, 0, 400, 400);
    
    circle = new Path2D();
    circle.arc(200, 200, 150, 0, 2 * Math.PI);
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.stroke(circle);
    
    context.strokeStyle = "black";
    context.lineWidth = 1.5;
    context.stroke(boltLine);
    context.strokeStyle = "grey";
    context.lineWidth = 1;
    context.stroke(line);

    let date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

    let secondsAngle = (seconds / 60) * (2 * Math.PI),
    minutesAngle = (minutes / 60) * (2 * Math.PI),
    hoursAngle = ((hours % 12) / 12) * (2 * Math.PI);

    secondsAngle = Math.PI / 2 - secondsAngle;
    minutesAngle = Math.PI / 2 - minutesAngle;
    hoursAngle = Math.PI / 2 - hoursAngle;

    let Sx = Math.cos(secondsAngle) * R;
    let Sy = -Math.sin(secondsAngle) * R;
    let S1x = 0.95 * Sx;
    let S1y = 0.95 * Sy;
    S1x += R1; S1y += R1;
    let secondsLine = new Path2D();
    secondsLine.moveTo(200, 200);
    secondsLine.lineTo(S1x, S1y);
    context.strokeStyle = "red";
    context.lineWidth = 2;
    context.stroke(secondsLine);
    
    let Mx = Math.cos(minutesAngle) * R;
    let My = -Math.sin(minutesAngle) * R;
    let M1x = 0.75 * Mx;
    let M1y = 0.75 * My;
    M1x += R1; M1y += R1;
    let minutesLine = new Path2D();
    minutesLine.moveTo(200, 200);
    minutesLine.lineTo(M1x, M1y);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke(minutesLine);

    let Hx = Math.cos(hoursAngle) * R;
    let Hy = -Math.sin(hoursAngle) * R;
    let H1x = 0.5 * Hx;
    let H1y = 0.5 * Hy;
    H1x += R1; H1y += R1;
    let hoursLine = new Path2D();
    hoursLine.moveTo(200, 200);
    hoursLine.lineTo(H1x, H1y);
    context.strokeStyle = "black";
    context.lineWidth = 8;
    context.stroke(hoursLine);

    setTimeout(drawWatch, 1000);
}

drawWatch();