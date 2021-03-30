const flock = [];

function setup() {
    var canvas = createCanvas(window.innerWidth, 360);
    canvas.parent('flocking');

    for (var i = 0; i < 100; i++) {
        flock.push(new Boid());
    }
}

function draw() {
    background(99);

    for (let Boid of flock) {
        Boid.edges();
        Boid.flock(flock);
        Boid.show();
        Boid.update();
    }
}