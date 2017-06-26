import { Component, Input } from 'angular-ts-decorators';
import { TileHandlerService } from '../services/tile-handler.service';
import { Tile, TileMode } from "../models/tile";

@Component({
	selector: 'randomTileList',
	templateUrl: '/random-tile-list/random-tile-list.component.html',
	styles: ['./random-tile-list.scss'],
})
export class RandomTileList {
    private $ctrl: RandomTileList;
	private ths: Array<Tile>;
	private tileService: TileHandlerService;

	constructor(TileHandlerService: TileHandlerService) {
		this.$ctrl = this; // not really needed, just a hint for the IDE

		//TODO: Wire this up to actual service and use observable and await style with a subscription
		this.tileService = TileHandlerService;
    }

	tileClick(tile) {
		console.log(tile);
	}
	$onInit() {
		this.ths = this.tileService.getTiles();
		this.$ctrl.ths = this.ths;
    }
}