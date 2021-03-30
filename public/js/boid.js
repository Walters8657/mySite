class Boid {

    constructor () {
        this.position = createVector(random(width), random(height)); //Spawns in random position
        this.velocity = p5.Vector.random2D(); //Sets velocity to a vector
        this.velocity.setMag(random(2, 1.5)); //Sets speed to random speed
        this.acceleration = createVector(); //Sets acceleration to a vector
        this.perceptionRadius = 30; //Sets thebirds view radius
        this.maxForce = 0.02; //Sets how heavily Boids turn
        this.speed = 1; //Sets speed
    }

    edges() { //Going past the edge does like pacman and goes to the other side
        if (this.position.x > width)
            this.position.x = 0;
        if (this.position.x < 0)
            this.position.x = width;

        if (this.position.y > height)
            this.position.y = 0;
        if (this.position.y < 0) 
            this.position.y = height;
    }

    align (boids) {
        let steering = createVector();
        let total = 0;
        for (let other of boids) {
            let d = dist(
                this.position.x,
                this.position.y,
                other.position.x,
                other.position.y
            ) //Gets distance to all Boids
            if (other != this && d < this.perceptionRadius) { //If boid is in perception range
                steering.add(other.velocity); //Add their velocity to a running total
                total++;
            }
        }
        if (total > 0) {
            steering.div(total); //Gets average velocity of Boids in range
            steering.setMag(this.speed); //Sets speed
            steering.sub(this.velocity); //Adjusts Boids course to turn to the average
            steering.limit(this.maxForce); //Limits turn to max force
        }
        return steering;
    } 
    
    cohesion (boids) {
        let steering = createVector();
        let total = 0;
        for (let other of boids) {
            let d = dist(
                this.position.x,
                this.position.y,
                other.position.x,
                other.position.y
            ) //Gets distance to all Boids
            if (other != this && d < this.perceptionRadius) { //If boid is in perception range
                steering.add(other.position); //Add their velocity to a running total
                total++;
            }
        }
        if (total > 0) {
            steering.div(total); //Gets average position of boids in range
            steering.sub(this.position); //Gets path to the average position
            steering.setMag(this.speed); //Sets speed 
            steering.sub(this.velocity); //Gets desired speed
            steering.limit(this.maxForce); //Limits boid
        }
        return steering;
    } 

    seperation (boids) {
        let steering = createVector();
        let total = 0;
        for (let other of boids) {
            let d = dist(
                this.position.x,
                this.position.y,
                other.position.x,
                other.position.y
            ) //Gets distance to boids
            if (other != this && d < this.perceptionRadius) {
                let diff = p5.Vector.sub(this.position, other.position); //Gets Vector towards bird in range

                diff.div(d*d); //Reverses that vector to avoid them

                steering.add(diff); //Adds avoidance vector to running total
                total++;
            }
        }
        if (total > 0) {
            steering.div(total); //Gets average vector away from boids
            steering.setMag(this.speed); //Sets speed
            steering.sub(this.velocity); //Sets desired speed
            steering.limit(this.maxForce); //Limits speed
        }
        return steering;
    } 

    flock(boids) {
        let alignment = this.align(boids);
        let cohesion = this.cohesion(boids);
        let seperation = this.seperation(boids);

        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
        this.acceleration.add(seperation);
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.speed);
        
        this.acceleration.set(0, 0); //Acceleration doesnt stack
    }

    show() {
        let theta = this.velocity.heading() + radians(90); //Gets direction in degrees
        fill(169); //BG Color
        stroke(269); //Stroke
        push();
        translate(this.position.x, this.position.y); //Moves triangle
        rotate(theta); //Rotates triangle
        beginShape(); //Draws shape begin
        vertex(0, -6); //Sets a vertex
        vertex(-3, 6); //Sets a vertex
        vertex(3, 6); //Sets a vertex
        endShape(CLOSE); //Shape is done
        pop();

    }

}