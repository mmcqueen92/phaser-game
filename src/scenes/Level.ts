
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

		// star
		const star = new StarPrefab(this, 179, -96);
		this.add.existing(star);

		// star_1
		const star_1 = new StarPrefab(this, 312, -77);
		this.add.existing(star_1);

		// star_3
		const star_3 = new StarPrefab(this, 461.3751806729729, -94.71402015889419);
		this.add.existing(star_3);

		// star_6
		const star_6 = new StarPrefab(this, 782.9754111110631, -81.7636753090382);
		this.add.existing(star_6);

		// star_7
		const star_7 = new StarPrefab(this, 895.2117331431483, -81.7636753090382);
		this.add.existing(star_7);

		// star_8
		const star_8 = new StarPrefab(this, 1007.4480551752334, -70.97172126749155);
		this.add.existing(star_8);

		// star_9
		const star_9 = new StarPrefab(this, 1126.1595496322466, -66.65493965087289);
		this.add.existing(star_9);

		// star_2
		const star_2 = new StarPrefab(this, 823.9848364689403, 453.51724515167587);
		this.add.existing(star_2);

		// star_4
		const star_4 = new StarPrefab(this, 966.4386298173562, 382.29034847746794);
		this.add.existing(star_4);

		// star_5
		const star_5 = new StarPrefab(this, 1113.2092047823908, 434.0917278768919);
		this.add.existing(star_5);

		// lists
		const platforms = [bottomPlatform, platform_Prefab_2, platform_Prefab_1, platform_Prefab];

		// collider
		this.physics.add.collider(player, platforms);

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

	update() {
		if (this.leftKey.isDown) {
			this.player.setVelocityX(-160);
			this.player.play(ANIM_LEFT, true);
		} else if (this.rightKey.isDown) {
			this.player.setVelocityX(160);
			this.player.play(ANIM_RIGHT, true)
		} else {
			this.player.setVelocityX(0);
			this.player.play(ANIM_TURN);
		}

		if (this.upKey.isDown && this.player.body.touching.down) {
			this.player.setVelocityY(-330);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
