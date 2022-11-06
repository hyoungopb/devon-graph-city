var pixelSize = 20;
var cityHeight = 41;
var cityWidth = 31;
var roadColor = "#706662";
var lineFunc = d3.line()
        .x(function(d) {return d.x})
        .y(function(d) { return d.y})
// get the model
var model = d3.select('body').append('svg')
                .attr('width', cityWidth * pixelSize)
                .attr('height', cityHeight * pixelSize); 

// draw a rectangle
// model.append('rect')
//         .attr('x', 10)
//         .attr('y', 50)
//         .attr('width', 100)
//         .attr('height', 200)
//         .attr('fill', '#ff0000')
     
// text (with rotation option)
// model.append('text')
//         .text('rotated text')
//         .attr('text-anchor', 'middle')
//         .attr('transform', 'translate(300,150) rotate(-90)');


// convert Y because (0,0) is in upper left
function getY(num) {
    return (41 - num) * pixelSize;
}

//console.log(newNum);

// off road arena
model.append('rect')
        .attr('x', 2 * pixelSize)
        .attr('y', getY(18))
        .attr('width', 3 * pixelSize)
        .attr('height', 8 * pixelSize)
        .attr('fill', '#6b3c27');
 
// rumble road
model.append('rect')
        .attr('x', 5 * pixelSize)
        .attr('y', getY(15))
        .attr('width', 21 * pixelSize)
        .attr('height', 1 * pixelSize)
        .attr('fill', roadColor);

// car blvd
model.append('rect')
.attr('x', 18 * pixelSize)
.attr('y', getY(30))
.attr('width', 1 * pixelSize)
.attr('height', 30 * pixelSize)
.attr('fill', roadColor);

// runaway highway
model.append('rect')
.attr('x', 26 * pixelSize)
.attr('y', 0)
.attr('width', 2 * pixelSize)
.attr('height', cityHeight * pixelSize )
.attr('fill', roadColor);

// supercar st
model.append('rect')
.attr('x', 10 * pixelSize)
.attr('y', getY(27))
.attr('width', 8 * pixelSize)
.attr('height', 1 * pixelSize)
.attr('fill', roadColor);

model.append('rect')
.attr('x', 10 * pixelSize)
.attr('y', getY(27))
.attr('width', 1 * pixelSize)
.attr('height', 7 * pixelSize)
.attr('fill', roadColor);

// race track
model.append('rect')
.attr('x', 8 * pixelSize)
.attr('y', getY(38))
.attr('width', 13 * pixelSize)
.attr('height', 8 * pixelSize)
.attr('fill', roadColor);

model.append('rect')
.attr('x', 10 * pixelSize)
.attr('y', getY(36))
.attr('width', 9 * pixelSize)
.attr('height', 4 * pixelSize)
.attr('fill', '#6ddb65');

// zoom zoom hotel
model.append('rect')
.attr('x', 19 * pixelSize)
.attr('y', getY(24))
.attr('width', 6 * pixelSize)
.attr('height', 3 * pixelSize)
.attr('fill', '#d1661f');

// car store
model.append('rect')
.attr('x', 15 * pixelSize)
.attr('y', getY(24))
.attr('width', 3 * pixelSize)
.attr('height', 5 * pixelSize)
.attr('fill', '#2fccc4');

// delorean and devon dealer
model.append('rect')
.attr('x', 16 * pixelSize)
.attr('y', getY(10))
.attr('width', 2 * pixelSize)
.attr('height', 6 * pixelSize)
.attr('fill', '#8b2fcc');

// trafic lights
model.append('rect')
.attr('x', 17.5 * pixelSize)
.attr('y', getY(14))
.attr('width', 10)
.attr('height', 10)
.attr('fill', '#c2cc2f');

model.append('rect')
.attr('x', 19 * pixelSize)
.attr('y', getY(14))
.attr('width', 10)
.attr('height', 10)
.attr('fill', '#c2cc2f');

model.append('rect')
.attr('x', 19 * pixelSize)
.attr('y', getY(15.5))
.attr('width', 10)
.attr('height', 10)
.attr('fill', '#c2cc2f');

model.append('rect')
.attr('x', 17.5 * pixelSize)
.attr('y', getY(15.5))
.attr('width', 10)
.attr('height', 10)
.attr('fill', '#c2cc2f');

// fall tree
model.append('rect')
.attr('x', 9 * pixelSize)
.attr('y', getY(11))
.attr('width', 10)
.attr('height', 10)
.attr('fill', '#7a662d');

// time mechine mechanics
model.append('rect')
.attr('x', 9 * pixelSize)
.attr('y', getY(20))
.attr('width', 6 * pixelSize)
.attr('height', 1 * pixelSize)
.attr('fill', '#2fccc4');

// time mechine mechanics
model.append('rect')
.attr('x', 297)
.attr('y', getY(20))
.attr('width', 3)
.attr('height', 1 * pixelSize)
.attr('fill', '#141414');

// bugati bakery
model.append('rect')
.attr('x', 6 * pixelSize)
.attr('y', getY(25))
.attr('width', 4 * pixelSize)
.attr('height', 5 * pixelSize)
.attr('fill', '#c7a64a' );

// drift alley
model.append('rect')
.attr('x', 5 * pixelSize)
.attr('y', getY(29))
.attr('width', 5 * pixelSize)
.attr('height', 3 * pixelSize)
.attr('fill', '#403f3b' );

// bang bam zoom
model.append('rect')
.attr('x', 10 * pixelSize)
.attr('y', getY(28))
.attr('width', 7 * pixelSize)
.attr('height', 1 * pixelSize)
.attr('fill', '#2fccc4' );

// corner stop
model.append('rect')
.attr('x', 11 * pixelSize)
.attr('y', getY(26))
.attr('width', 3 * pixelSize)
.attr('height', 3 * pixelSize)
.attr('fill', '#edece6' );

model.append('rect')
.attr('x', 11 * pixelSize)
.attr('y', getY(26))
.attr('width', 1 * pixelSize)
.attr('height', 1 * pixelSize)
.attr('fill', '141414' );

model.append('rect')
.attr('x', 13 * pixelSize)
.attr('y', getY(26))
.attr('width', 1 * pixelSize)
.attr('height', 1 * pixelSize)
.attr('fill', '141414' );

model.append('rect')
.attr('x', 12 * pixelSize)
.attr('y', getY(25))
.attr('width', 1 * pixelSize)
.attr('height', 1 * pixelSize)
.attr('fill', '#141414' );

model.append('rect')
.attr('x', 11 * pixelSize)
.attr('y', getY(24))
.attr('width', 1 * pixelSize)
.attr('height', 1 * pixelSize)
.attr('fill', '141414' );

model.append('rect')
.attr('x', 13 * pixelSize)
.attr('y', getY(24))
.attr('width', 1 * pixelSize)
.attr('height', 1 * pixelSize)
.attr('fill', '141414' );

//parking lot
model.append('rect')
.attr('x', 19 * pixelSize)
.attr('y', getY(21))
.attr('width', 3 * pixelSize)
.attr('height', 2 * pixelSize)
.attr('fill', '#edece6' );

model.append('rect')
.attr('x', 19.5 * pixelSize)
.attr('y', getY(20))
.attr('width', 3)
.attr('height', 1 * pixelSize)
.attr('fill', '141414' );

model.append('rect')
.attr('x', 20 * pixelSize)
.attr('y', getY(20))
.attr('width', 3)
.attr('height', 1 * pixelSize)
.attr('fill', '141414' );

model.append('rect')
.attr('x', 20.5 * pixelSize)
.attr('y', getY(20))
.attr('width', 3)
.attr('height', 1 * pixelSize)
.attr('fill', '141414' );

model.append('rect')
.attr('x', 21 * pixelSize)
.attr('y', getY(20))
.attr('width', 3)
.attr('height', 1 * pixelSize)
.attr('fill', '141414' );

model.append('rect')
.attr('x', 21.5 * pixelSize)
.attr('y', getY(20))
.attr('width', 3)
.attr('height', 1 * pixelSize)
.attr('fill', '141414' );

model.append('rect')
.attr('x', 19 * pixelSize)
.attr('y', getY(20))
.attr('width', 3)
.attr('height', 1 * pixelSize)
.attr('fill', '141414' );

//pikup beds
model.append('rect')
.attr('x', 20 * pixelSize)
.attr('y', getY(11))
.attr('width', 1 * pixelSize)
.attr('height', 1 * pixelSize)
.attr('fill', '#0c7fb0' );

model.append('rect')
.attr('x', 21 * pixelSize)
.attr('y', getY(14))
.attr('width', 1 * pixelSize)
.attr('height', 5 * pixelSize)
.attr('fill', '#b05e0c' );

// delorean dinner

model.append('rect')
.attr('x', 13 * pixelSize)
.attr('y', getY(14))
.attr('width', 1 * pixelSize)
.attr('height', 7 * pixelSize)
.attr('fill', '#403f3b' );

model.append('rect')
.attr('x', 12 * pixelSize)
.attr('y', getY(11))
.attr('width', 1 * pixelSize)
.attr('height', 1 * pixelSize)
.attr('fill', '#403f3b' );

model.append('path')
.attr('d', lineFunc([
        {x: 12 * pixelSize, y:getY(10)},
        {x: 13 * pixelSize, y:getY(7)},
        {x: 13 * pixelSize, y:getY(10)},
]))
.attr("fill", "#0cebe7");

model.append('path')
.attr('d', lineFunc([
        {x: 12 * pixelSize, y:getY(11)},
        {x: 13 * pixelSize, y:getY(12.2)},
        {x: 13 * pixelSize, y:getY(11)},
]))
.attr("fill", "#0cebe7");

model.append('rect')
.attr('x', 12.2 * pixelSize)
.attr('y', getY(10.9))
.attr('width', 0.5 * pixelSize)
.attr('height', 0.8 * pixelSize)
.attr('fill', '#0cebe7' );