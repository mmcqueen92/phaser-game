
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PlatformPrefab from "./PlatformPrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// sky
		const sky = this.add.image(646, 363, "sky");
		sky.scaleX = 1.6;
		sky.scaleY = 1.2;

		// platform_Prefab
		const platform_Prefab = new PlatformPrefab(this, 42, 364);
		this.add.existing(platform_Prefab);

		// platform_Prefab_1
		const platform_Prefab_1 = new PlatformPrefab(this, 855, 500);
		this.add.existing(platform_Prefab_1);

		// platform_Prefab_2
		const platform_Prefab_2 = new PlatformPrefab(this, 848, 203);
		this.add.existing(platform_Prefab_2);

		// platformPrefab
		const platformPrefab = new PlatformPrefab(this, -49, 714);
		this.add.existing(platformPrefab);
		platformPrefab.scaleX = 4;
		platformPrefab.scaleY = 1;
		platformPrefab.tintTopLeft = 672009;
		platformPrefab.tintTopRight = 672009;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
