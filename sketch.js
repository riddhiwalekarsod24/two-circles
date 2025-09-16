// Click and drag the mouse to view the scene from different angles.

function setup() {
  createCanvas(500, 500, WEBGL);

  describe('A white torus on a gray background.');
}

function draw() {
  background(00);

  // Enable orbiting with the mouse.
  orbitControl();

  // Draw the torus.
  // Set its radius to 30.
  torus(100);
  fill('orange')
  torus(200);
  fill('yellow')
}