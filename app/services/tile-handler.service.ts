import { Injectable } from "angular-ts-decorators";
import { Tile, TileMode } from "../models/tile";

@Injectable('TileHandlerService')
export class TileHandlerService {

	getTiles(): Array<Tile> {

		return [
		{
			"id": 1,
			"title": "Headline 1/Tile 1",
			"picture": "https://pbs.twimg.com/profile_images/783057525272743936/jb8MmZ29.jpg",
			"addedBy": "User 1",
			"viewedBy": "User 1",
			"text": "Lorem 1",
			"tileMode": TileMode.NEW
			},
		{
			"id": 2,
			"title": "Headline 2/Tile 2",
			"picture": "https://pbs.twimg.com/profile_images/783057525272743936/jb8MmZ29.jpg",
			"addedBy": "User 2",
			"viewedBy": "User 2",
			"text": "Lorem 2",
			"tileMode": TileMode.NEW
		},
		{
			"id": 3,
			"title": "Headline 3/Tile 3",
			"picture": "https://pbs.twimg.com/profile_images/783057525272743936/jb8MmZ29.jpg",
			"addedBy": "User 3",
			"viewedBy": "User 3",
			"text": "Lorem 3",
			"tileMode": TileMode.NEW
		},
		{
			"id": 4,
			"title": "Headline 4/Tile 4",
			"picture": "https://pbs.twimg.com/profile_images/783057525272743936/jb8MmZ29.jpg",
			"addedBy": "User 4",
			"viewedBy": "User 4",
			"text": "Lorem 4",
			"tileMode": TileMode.NEW
		},
		];
	}
}
