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
    rect(677.5, 233, 250, 250);
    rect(927.5, 233, 250, 250);
    rect(1177.5, 233, 250, 250);
    rect(677.5, 483, 250, 250);
    rect(927.5, 483, 250, 250);
    rect(1177.5, 483, 250, 250);
    rect(677.5, 733, 250, 250);
    rect(927.5, 733, 250, 250);
    rect(1177.5, 733, 250, 250);
};

Game.prototype.run = function() {
    this.update();
    this.render();
};
