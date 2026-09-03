$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(0, 0, 0)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(0, 700, 500, 20, "red");
    createBadPlatform(500, 700, 500, 20, "black");
    createBadPlatform(1000, 700, 500, 20, "black");
    createPlatform(340, 200, 20, 400, "red");
    createPlatform(500, 200, 20, 500, "red");
    createPlatform(330, 580, 10, 20, "red");
    createPlatform(250, 450, 5, 10, "red");
    createPlatform(150, 350, 5, 10, "red");
    createPlatform(250, 250, 5, 10, "red");
    createPlatform(350, 200, 170, 20, "red");
    createPlatform(600, 200, 5, 10, "red");
    createPlatform(800, 200, 5, 10, "red");
    createPlatform(1000, 200, 5, 10, "red");
    createPlatform(1380, 550, 5, 10, "red");

    // TODO 3 - Create Collectables
    createCollectable("max", 1350, 500);
    // TODO 4 - Create Cannons
     createCannon("top", 100, 1500);
    createCannon("top", 250, 1500);
    createCannon("top", 400, 1500);
    createCannon("top", 550, 1500);
    createCannon("top", 700, 1500);
    createCannon("top", 850, 1500);
    createCannon("top", 1000, 1500);
    createCannon("bottom", 1150, 1500);
    createCannon("bottom", 1300, 1500);
    createCannon("right", 1150, 100);
    createCannon("right", 1300, 10);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
