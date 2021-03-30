class Boid {

    constructor () {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 1.5));
        this.acceleration = createVector();
        this.perceptionRadius = 50;
        this.maxForce = 0.1;
        this.speed = 1;
    }

    edges() {
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
            )
            if (other != this && d < this.perceptionRadius) {
                steering.add(other.velocity);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.setMag(this.speed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
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
            )
            if (other != this && d < this.perceptionRadius) {
                steering.add(other.position);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.sub(this.position);
            steering.setMag(this.speed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
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
            )
            if (other != this && d < this.perceptionRadius) {
                let diff = p5.Vector.sub(this.position, other.position);

                diff.div(d*d);

                steering.add(diff);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.setMag(this.speed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
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
        
        this.acceleration.set(0, 0);
    }

    show() {
        /*
        strokeWeight(10);
        stroke(255);
        point(this.position.x, this.position.y)
        */

        let theta = this.velocity.heading() + radians(90); //Gets direction in degrees
        fill(127); //BG Color
        stroke(200); //Stroke
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