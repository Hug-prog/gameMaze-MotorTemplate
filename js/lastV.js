// player
class Player {
  constructor(id, name, health, attack, posX, posY) {
    this.id = id;
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.posX = posX;
    this.posY = posY;
  }

  // get
  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getHealth() {
    return this.health;
  }

  getAttack() {
    return this.attack;
  }

  getPosX() {
    return this.posX;
  }

  getPosY() {
    return this.posY;
  }

  //set

  setHealth(health) {
    this.health = health;
  }

  setAttack(attack) {
    this.attack = attack;
  }

  setPosX(posX) {
    this.posX = posX;
  }

  setPosY(posY) {
    this.posY = posY;
  }
}

// bots
class Bots extends Player {
  constructor(id, name, health, attack, posX, posY) {
    super(id, name, health, attack, posX, posY);
  }
}

//arrow
class Arrow {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }

  getPosX() {
    return this.posX;
  }

  getPosY() {
    return this.posY;
  }

  setPosX(posX) {
    this.posX = posX;
  }

  setPosY(posY) {
    this.posY = posY;
  }
}

// draw Maze
function drawMaze(laby) {
  for (var i = 0; i < HEIGHT; i++) {
    var ligne = "<tr>";

    for (var j = 0; j < WIDTH; j++) {
      if (laby[i][j] == 1) {
        ligne += "<td></td>";
      } else if (laby[i][j] == "p") {
        ligne += '<td name="td" class="player" alt=""></td>';
      } else if (laby[i][j] == "b") {
        ligne += '<td name="tdMobs" class="mobs" alt=""></td>';
      } else if (laby[i][j] == "arr") {
        ligne += '<td name="arr" bgcolor="red" class="arr" alt=""></td>';
      } else {
        ligne += '<td bgcolor="black" alt=""></td>';
      }
    }

    document
      .getElementById("monLabyrinthe")
      .insertAdjacentHTML("beforeEnd", ligne);
  }
}

function deleteChild(e) {
  Object.values(t.getElementsByTagName("tbody")).forEach(v => v.remove());
}

// check collide
function CheckCollide(matrice, h, start, n) {
  if (start == null || n == null) return true;

  for (let x = start; x <= start + n; x++) {
    if (matrice[h][x] == 0) return true;
  }

  return false;
}

// size Maze
const WIDTH = 35,
  HEIGHT = 20;

function GenRandommaze(w, h) {
  _m = [];

  for (let _h = 0; _h < h; _h++) {
    _m[_h] = [];

    _m[_h].push(0);

    for (let _w = 0; _w < w; _w++) {
      if (_h == 0 || _w == w - 1 || _h == h - 1) {
        _m[_h].push(0);
      } else _m[_h].push(0);
    }
  }

  // Parcour les colonne
  _m.forEach((_eh, ih) => {
    // Parcour les ligne
    _eh.forEach((_ew, iw) => {
      // Check si il est plus grand que 0  et plus petit que la taille de la matrice (pour les bord)
      if (iw > 0 && ih > 0 && iw < _m[0].length - 2 && ih < _m.length - 2) {
        // Verifie si c'est de "2 en 2"
        if (ih % 2 || iw % 2) {
          // Si c'est la cas alors c'est un carré blanc (vide)
          _m[ih][iw] = 1;
        }
      }

      // Pour eliminer la surcouche des bord
      if (iw == _m[0].length - 1 || ih == _m.length - 1) _m[ih][iw] = 1;
    });
  });

  // J'ai essayé de concatener ce qui suit dans la première iteration mais j'y arrive pas

  // Parcour les colonne
  _m.forEach((_eh, ih) => {
    // Parcour les ligne
    _eh.forEach((_ew, iw) => {
      // Random Position (pour plus tard)
      let CRandom = RandomNumber(0, 3);

      // Check si il est plus grand que 0  et plus petit que la taille de la matrice (pour les bord)
      if (iw > 0 && ih > 0 && iw < _m[0].length - 2 && ih < _m.length - 2) {
        // Verifie si ce n'est de "2 en 2" (pour être sur les carré noir)
        if (!(ih % 2) && !(iw % 2)) {
          // Si CRandom est egal 0 alors il y a un carré noir au dessus de celui actuellement
          if (CRandom == 0) {
            _m[ih - 1][iw] = 0;

            // Si CRandom est egal 1 alors il y a un carré noir juste a droite de celui actuellement
          } else if (CRandom == 1) {
            _m[ih][iw + 1] = 0;

            // Si CRandom est egal 2 alors il y a un carré noir en dessous de celui actuellement
          } else if (CRandom == 2) {
            _m[ih + 1][iw] = 0;

            // Si CRandom est egal 2 alors il y a un carré noir juste a gauche de celui actuellement
          } else if (CRandom == 3) {
            _m[ih][iw - 1] = 0;
          }
        }
      }
    });
  });

  return _m;
}

// call php
function callPHP(params, url) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    console.log("ok ok pass");
  };
  xhttp.open("POST", "./?action=" + url);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(params);
}

// end game
function endGame(id, health) {
  callPHP(`id=${id}&health=${health}`, "healthPlayer");
}

// random number generator
function RandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// healthcompt
function healthCompt(health) {}

//alea chose move bots
function moveBots(bot, laby, player) {
  let direction = ["up", "down", "left", "right"];
  let random = direction[Math.floor(Math.random() * direction.length)];

  // move Up
  if (random == "up") {
    if (
      laby[bot.getPosX() - 1][bot.getPosY()] == 1 ||
      laby[bot.getPosX() - 1][bot.getPosY()] == "p"
    ) {
      if (laby[bot.getPosX() - 1][bot.getPosY] == "p") {
        player.setHealth(player.getHealth() - 3);
      } else {
        laby[bot.getPosX()][bot.getPosY()] = 1;
        laby[bot.getPosX() - 1][bot.getPosY()] = "b";
        bot.setPosX(bot.getPosX() - 1);
      }
    }
  }
  // move Down
  else if (random == "down") {
    if (
      laby[bot.getPosX() + 1][bot.getPosY()] == 1 ||
      laby[bot.getPosX() + 1][bot.getPosY()] == "p"
    ) {
      if (laby[bot.getPosX() + 1][bot.getPosY] == "p") {
        player.setHealth(player.getHealth() - 3);
      } else {
        laby[bot.getPosX()][bot.getPosY()] = 1;
        laby[bot.getPosX() + 1][bot.getPosY()] = "b";
        bot.setPosX(bot.getPosX() + 1);
      }
    }
  }
  // move left
  else if (random == "left") {
    if (
      laby[bot.getPosX()][bot.getPosY() - 1] == 1 ||
      laby[bot.getPosX()][bot.getPosY() - 1] == "p"
    ) {
      if (laby[bot.getPosX()][bot.getPosY() - 1] == "p") {
        player.setHealth(player.getHealth() - 3);
      } else {
        laby[bot.getPosX()][bot.getPosY()] = 1;
        laby[bot.getPosX()][bot.getPosY() - 1] = "b";
        bot.setPosY(bot.getPosY() - 1);
      }
    }
  }
  // move right
  else if (random == "right") {
    if (
      laby[bot.getPosX()][bot.getPosY() + 1] == 1 ||
      laby[bot.getPosX()][bot.getPosY() + 1] == "p"
    ) {
      if (laby[bot.getPosX()][bot.getPosY() + 1] == "p") {
        player.setHealth(player.getHealth() - 3);
      } else {
        laby[bot.getPosX()][bot.getPosY()] = 1;
        laby[bot.getPosX()][bot.getPosY() + 1] = "b";
        bot.setPosY(bot.getPosY() + 1);
      }
    }
  }
}

// move bots
async function renderBots(bots, laby, player) {
  while (laby) {
    for (let i = 0; i < bots.length; i++) {
      moveBots(bots[i], laby, player);
      // health compt
      healthCompt(player.getHealth());
    }
    await sleep(100);
  }
}

const RAYCAST = {
  up: 0,
  right: 1,
  bottom: 2,
  left: 3,
};

function RayCast(matrice, start = { x: 0, y: 0 }, RaySize, direction) {
  if (direction == RAYCAST.up) {
    for (let x = 1; x <= RaySize; x++) {
      if (matrice[start.y - x] != undefined) {
        if (matrice[start.y - x][start.x] == 0)
          return { position: { x: start.x, y: start.y + x }, col: true };
      }
    }
  } else if (direction == RAYCAST.right) {
    for (let x = 1; x < RaySize; x++) {
      if (matrice[start.y][start.x + x] != undefined) {
        if (matrice[start.y][start.x + x] == 0)
          return { position: { x: start.x + x, y: start.y }, col: true };
      }
    }
  }

  return { position: { x: start.x, y: start.y }, col: false };
}

// sleep
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// render Maze
async function render(laby) {
  while (laby) {
    drawMaze(laby);
    await sleep(100);

    // remove all elements from table
    Object.values(
      document.getElementById("monLabyrinthe").getElementsByTagName("tr")
    ).forEach(v => v.remove());
  }
}

// render arrow
async function renderArrow(laby, wall, arrow) {
  console.log("wall", wall, "arrow", arrow);
  while (laby) {
    for (let i = 0; i <= wall; i++) {
      laby[arrow.getPosX()][arrow.getPosY() + 1] = "arr";
      arrow.setPosY(arrow.getPosX() + 1);
    }
    await sleep(100);
  }
}

CONSTROL = {
  up: "z",
  left: "q",
  right: "d",
  bottom: "s",
};

function main(infoPlayer) {
  const nbBots = 4;

  laby = GenRandommaze(WIDTH, HEIGHT);

  // create player
  let player = new Player(
    infoPlayer.id,
    `${infoPlayer.name}`,
    infoPlayer.health,
    infoPlayer.attack,
    1,
    1
  );

  // create bots
  let bots = [];
  for (let i = 0; i < nbBots; i++) {
    let x = RandomNumber(1, 15);
    let y = RandomNumber(1, 15);
    let bot = new Bots(2, "testBot" + i, 20, 20, x, y);
    bots.push(bot);
    // add bots in matrix
    laby[bot.getPosX()][bot.getPosY()] = "b";
  }

  // create Arrow
  let arrow = new Arrow(player.getPosX(), player.getPosY());

  // create btn stop game
  let stopGame = document.querySelector(".btnStopGame");
  stopGame.addEventListener("click", () => {
    endGame(player.getId(), player.getHealth());
  });

  // add players in matrix
  laby[player.getPosX()][player.getPosY()] = "p";

  // move bot
  renderBots(bots, laby, player);

  // create maze
  render(laby);

  // if keyBoard is pressed
  document.addEventListener("keydown", event => {
    for (var i = 0; i < HEIGHT; i++) {
      for (var j = 0; j < WIDTH; j++) {
        // get posPlayery
        if (laby[i][j] == "p") {
          player.setPosX(i);
          player.setPosY(j);
        }
      }
    }

    // front
    if (
      (event.key == CONSTROL.up &&
        laby[player.getPosX() - 1][player.getPosY()] == 1) ||
      laby[player.getPosX() - 1][player.getPosY()] == "b"
    ) {
      // if collid to bot
      if (laby[player.getPosX() - 1][player.getPosY()] == "b") {
        // remove health
        player.setHealth(player.getHealth() - 3);
      } else {
        // forward
        laby[player.getPosX()][player.getPosY()] = 1;
        laby[player.getPosX() - 1][player.getPosY()] = "p";
      }
    }

    // back
    if (
      (event.key == "s" && laby[player.getPosX() + 1][player.getPosY()] == 1) ||
      laby[player.getPosX() + 1][player.getPosY()] == "b"
    ) {
      // if collid to bot
      if (laby[player.getPosX() + 1][player.getPosY()] == "b") {
        // remove health
        player.setHealth(player.getHealth() - 3);
      } else {
        // forward
        laby[player.getPosX()][player.getPosY()] = 1;
        laby[player.getPosX() + 1][player.getPosY()] = "p";
      }
    }

    // left
    if (
      (event.key == "q" && laby[player.getPosX()][player.getPosY() - 1] == 1) ||
      laby[player.getPosX()][player.getPosY() - 1] == "b"
    ) {
      // if collid to bot
      if (laby[player.getPosX()][player.getPosY() - 1] == "b") {
        // remove health
        player.setHealth(player.getHealth() - 3);
      } else {
        // forward
        laby[player.getPosX()][player.getPosY()] = 1;
        laby[player.getPosX()][player.getPosY() - 1] = "p";
      }
    }

    // right
    if (
      (event.key == "d" && laby[player.getPosX()][player.getPosY() + 1] == 1) ||
      laby[player.getPosX()][player.getPosY() + 1] == "b"
    ) {
      // if collid to bot
      if (laby[player.getPosX()][player.getPosY() + 1] == "b") {
        // remove health
        player.setHealth(player.getHealth() - 3);
      } else {
        // forward
        laby[player.getPosX()][player.getPosY()] = 1;
        laby[player.getPosX()][player.getPosY() + 1] = "p";
      }
    }

    // arrow right
    if (event.key == "ArrowRight") {
      let coli = RayCast(
        laby,
        { x: player.getPosX(), y: player.getPosY() },
        WIDTH,
        RAYCAST.right
      );
      //console.log(coli);
      renderArrow(laby, coli.position.x, arrow);
    }

    // health compt
    healthCompt(player.getHealth());
  });
}
