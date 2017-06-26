export class Tile {
	public id: number;
	public title: string;
	public picture: string;
	public addedBy: string;
	public viewedBy: string;
	public text: string;
	public tileMode: TileMode; 
}

export enum TileMode {
	NEW = 0,
	CANCELLED = 3,
	ATTACK = 1,
	SAVE = 2
}
