import { Component, Input } from 'angular-ts-decorators';
import { Tile, TileMode } from "../models/tile";

@Component({
	selector: 'randomTileExpanded',
	templateUrl: '/random-tile-expanded/random-tile-expanded.component.html',
	styles: ['./random-tile-expanded.scss'],
})
export class RandomTileExpanded {
	tileInfo: any = {
		"title": "Heading",
		"addedBy": "Added By",
		"viewedBy": "Viewed By"
	};
	@Input() tile: Tile;

    private $ctrl: RandomTileExpanded;

	constructor() {
		this.$ctrl = this; // not really needed, just a hint for the IDE
    }
}
