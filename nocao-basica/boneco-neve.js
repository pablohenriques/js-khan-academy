
function setup () {
    createCanvas(400, 400);
}

function draw () {

    strokeWeight(5);

    // fundo
    background(72, 209, 204);

    // chao
    fill(0, 128, 0);
    rect(0, 345, 400, 65);

    // base
    fill(255, 255, 255);
    ellipse(200, 300, 150, 150);

    // meio
    fill(255, 255, 255);
    ellipse(200, 200, 100, 100);
    
    // cabeca
    fill(255, 255, 255);
    ellipse(200, 120, 75, 75);

    line(160, 200, 60,95);
    line(240, 200, 340, 95);

}