function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);

    //largura da linha
    strokeWeight(3);

    //rosto
    fill(176, 196, 222);
    rect(75, 45, 250, 300);

    //boca
    fill(165, 42, 42);
    rect(125, 250, 150, 60);

    //olho esquerdo
    fill(0, 191, 255);
    rect(140, 150, 30, 30);

    //olho direito
    rect(240, 150 ,30, 30);

    //pescoco
    fill(176, 196, 222);
    rect(175, 345, 50, 50);

    //sombrancelha esqueda
    strokeWeight(3);
    line(140, 129, 170, 129);

    //sombrancelha direita
    line(240, 129, 270, 120);

}