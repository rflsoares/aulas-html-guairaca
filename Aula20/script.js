let rotationDegree = 0;

function rotateElement() {
    rotationDegree += 45;
    document.getElementById('rotating-div').style
    .transform = `rotate(${rotationDegree}deg)`;
}