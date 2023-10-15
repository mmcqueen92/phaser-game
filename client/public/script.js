import "phaser";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

const game = new Phaser.Game(config);

let dragon;
let warriors;
let fireballs;

function preload() {
  this.load.image("dragon", "assets/dragon.png");
  this.load.image("warrior", "assets/warrior.png");
  this.load.image("fire", "assets/fire.png");
}

function create() {
  // Create dragon
  dragon = this.physics.add.sprite(400, 500, "dragon");
  dragon.setCollideWorldBounds(true);

  // Create warriors
  warriors = this.physics.add.group({
    key: "warrior",
    repeat: 4,
    setXY: { x: 100, y: 50, stepX: 100 },
  });

  // Create fireballs
  fireballs = this.physics.add.group({
    defaultKey: "fireball",
    maxSize: 10,
  });

  warriors.children.iterate((warrior) => {
    this.tweens.add({
      targets: warrior,
      x: warrior.x + 100,
      duration: 2000,
      yoyo: true,
      repeat: -1,
    });
  });

  this.physics.add.collider(fireballs, warriors, (fireball, warrior) => {
    fireball.destroy();
    warrior.destroy();
  });
}

function update() {
  const cursors = this.input.keyboard.createCursorKeys();

  if (cursors.left.isDown) {
    player.setVelocityX(-160);
  } else if (cursors.right.isDown) {
    player.setVelocityX(160);
  } else {
    player.setVelocityX(0);
  }

  if (cursors.space.isDown) {
    shootFireball(player.x, player.y);
  }
}

function shootFireball(x, y) {
  const warrior = warriors.get(x, y);

  if (warrior) {
    warrior.setActive(true);
    warrior.setVisible(true);
    warrior.setVelocityY(-300);
  }
}
