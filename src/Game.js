var Game = function() {

};

Game.prototype.initialize = function(object) {

};

Game.prototype.copy = function() {
    return Object.assign(new Game(), this);
};

Game.prototype.update = function() {

};

Game.prototype.render = function() {
    background('Black');
    strokeWeight(4);
    noFill();
    stroke('SkyBlue');
    rectMode(CENTER);
    rect(500, 290, 300, 500);

};

Game.prototype.run = function() {
    this.update();
    this.render();
};
