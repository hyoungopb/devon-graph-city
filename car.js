var carMovment = 5; 
var carGroup = model.append('g').attr('x', 0).attr('y', 0);

// add car
var car = carGroup.append("svg:image")
.attr('width', 50)
.attr('height', 17)
.attr('style', 'transform-origin: 25px 8.5px')
.attr("xlink:href", "delorean.svg");



// move car to starting position
var carX = 100;
var carY = 100;
carGroup.attr('transform', `translate(${carX}, ${carY})`);


// listen for key down events
document.addEventListener('keydown', (event) => {
    var keyName = event.key; 

    if (keyName === 'ArrowRight') {
        car.attr('transform', `rotate(0) scale(-1,1)`);
        carX += carMovment;
    }
    else if (keyName === 'ArrowLeft') {
        car.attr('transform', `rotate(0)`);
        carX -= carMovment;
    }

    else if (keyName === 'ArrowUp') {
        car.attr('transform', `rotate(90)`);
        carY -= carMovment;
    }

    else if (keyName === 'ArrowDown') {
        car.attr('transform', `rotate(-90)`);
        carY += carMovment;
    }

    // finally, move car group
    carGroup.attr('transform', `translate(${carX}, ${carY})`);

});