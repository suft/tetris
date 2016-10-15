var state;

function setup() {
    STATES = {
        'Main': function() {
            state.setCurrent('Main');
        },
        'Game': function() {
            state.setCurrent('Game');
        }
    };
    state = new State();
    state.initialize({
        current: setupCurrent(),
        scene: setupScene(),
        layout: setupLayout(),
        game: setupGame()
    });
}

function setupCurrent() {
    var current = "Splash";
    return current;
}

function setupScene() {
    var scene = new Scene();
    scene.initialize({
        current: 'Splash',
        duration: 100
    });
    return scene;
}

function setupLayout() {
    var layout = new Layout();
    layout.initialize({
        current: 'Main'
    });
    return layout;
}

function setupGame() {
    var game = new Game();
    game.initialize({});
    return game;
}

function keyPressed() {
    if (state.getCurrent() === 'Game' && keyCode === ESCAPE) {
        STATES.Main();
    }
}

function draw() {
    state.run();
}
