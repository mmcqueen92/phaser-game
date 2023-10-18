
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PlatformPrefab from "./PlatformPrefab";
import PlayerPrefab from "./PlayerPrefab";
import StarPrefab from "./StarPrefab";
/* START-USER-IMPORTS */
import { ANIM_LEFT, ANIM_RIGHT, ANIM_TURN } from "./animations";
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// leftKey
		const leftKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// rightKey
		const rightKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// upKey
		const upKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// sky
		const sky = this.add.image(646, 363, "sky");
		sky.scaleX = 1.6;
		sky.scaleY = 1.2;

		// platform_Prefab
		const platform_Prefab = new PlatformPrefab(this, 112, 436);
		this.add.existing(platform_Prefab);

		// platform_Prefab_1
		const platform_Prefab_1 = new PlatformPrefab(this, 785, 544);
		this.add.existing(platform_Prefab_1);

		// platform_Prefab_2
		const platform_Prefab_2 = new PlatformPrefab(this, 734, 277);
		this.add.existing(platform_Prefab_2);

		// bottomPlatform
		const bottomPlatform = new PlatformPrefab(this, -55, 696);
		this.add.existing(bottomPlatform);
		bottomPlatform.scaleX = 4;
		bottomPlatform.scaleY = 1;
		bottomPlatform.tintTopLeft = 672009;
		bottomPlatform.tintTopRight = 672009;

		// player
		const player = new PlayerPrefab(this, 457, 598);
		this.add.existing(player);

		// starsLayer
		const starsLayer = this.add.layer();

		// star
		const star = new StarPrefab(this, 179, -96);
		starsLayer.add(star);

		// star_1
		const star_1 = new StarPrefab(this, 312, -77);
		starsLayer.add(star_1);

		// star_3
		const star_3 = new StarPrefab(this, 461.37518310546875, -94.71401977539062);
		starsLayer.add(star_3);

		// star_6
		const star_6 = new StarPrefab(this, 782.9754028320312, -81.763671875);
		starsLayer.add(star_6);

		// star_7
		const star_7 = new StarPrefab(this, 895.2117309570312, -81.763671875);
		starsLayer.add(star_7);

		// star_8
		const star_8 = new StarPrefab(this, 1007.4480590820312, -70.97171783447266);
		starsLayer.add(star_8);

		// star_9
		const star_9 = new StarPrefab(this, 1126.1595458984375, -66.65493774414062);
		starsLayer.add(star_9);

		// star_2
		const star_2 = new StarPrefab(this, 823.98486328125, 453.5172424316406);
		starsLayer.add(star_2);

		// star_4
		const star_4 = new StarPrefab(this, 966.4386596679688, 382.29034423828125);
		starsLayer.add(star_4);

		// star_5
		const star_5 = new StarPrefab(this, 1113.209228515625, 434.09173583984375);
		starsLayer.add(star_5);

		// lists
		const platforms = [bottomPlatform, platform_Prefab_2, platform_Prefab_1, platform_Prefab];

		// player_platforms_collider
		this.physics.add.collider(player, platforms);

		// stars_platforms_collider
		this.physics.add.collider(starsLayer.list, platforms);

		// player_star_collider
		this.physics.add.overlap(player, starsLayer.list, this.collectStar as any, undefined, this);

		this.player = player;
		this.leftKey = leftKey;
		this.rightKey = rightKey;
		this.upKey = upKey;
		this.platforms = platforms;

		this.events.emit("scene-awake");
	}

	private player!: PlayerPrefab;
	private leftKey!: Phaser.Input.Keyboard.Key;
	private rightKey!: Phaser.Input.Keyboard.Key;
	private upKey!: Phaser.Input.Keyboard.Key;
	private platforms!: PlatformPrefab[];

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

	}

	private collectStar(player: PlayerPrefab, star: StarPrefab) {
		star.collected();
	}

	update() {
		this.updatePlayer();
	}

	private updatePlayer() {
		if (this.leftKey.isDown) {
			this.player.moveLeft();
		} else if (this.rightKey.isDown) {
			this.player.moveRight();
		} else {
			this.player.stopMoving();
		}

		if (this.upKey.isDown && this.player.body.touching.down) {
			this.player.jump();
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
