Angular 1.X Competency Demonstration
==========

## Background

I've used Angular 2/4 for the last 2 years but have not been exposed to Angular 1. This code sample is an attempt to show my skils in a limited project (time and scope).

## Seed Project

As Angular 1.X has long since been retired, finding information on the internet is a challenge as most google searches return the later (and incompatible) version, a Reversi Clone (Othello) was chosen as it was opinionated (webpack + typescript), info is below.

## Models & Services

A Tile model and a "simulation" service was created to help shuttle data between components, real code would likely make a REST call and return an Observable.

```
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
```

## UI

- file structure: HTML, Typescript File, SCSS (sass file) per folder - in the future an entire feature (Tiles) would go into a parent folder

- random-tile-list component: In the use-case 4 hard-coded tiles are used w/a break between 2 and 3, the dyanmic code (commented out) was included for future uses (would need to be width constrained to prevent wrap).

- random-tile-expanded component: The detail component simply shows the Tile passed from the list component

## SASS

While time did not prevent a full implementation (added it to webpack, but did not troubleshoot). Basic scss files are included but not tested. Most modern Angular projects include compiled style sheets by default.

---

Othello
==========

This repository shows a modernised AngularJS application which looks like an Angular 2+ application featuring the [Othello game (also known as Reversi)](https://en.wikipedia.org/wiki/Reversi).
 
 The application has been refactored using:
  
 - the [components introduced in AngularJS 1.5+](https://docs.angularjs.org/guide/component)
 - the [Webpack](https://webpack.github.io/) module loader
 - the [TypeScript](https://www.typescriptlang.org/) language (using [definitely-typed-angular type definitions](https://www.npmjs.com/package/definitely-typed-angular))
 - the [angular-ts-decorators](https://github.com/vsternbach/angular-ts-decorators) to make it similar to Angular 2+ style

This repository can be used as an example to whoever wants to **prepare** an old AngularJS (1.x) application to be migrated to the new Angular 2+, but also for those who just want to improve its AngularJS source code **without** actually migrating to the new Angular 2+.

*Note: with **Angular 2+** I just mean the new Angular (e.g. can be Angular 4, Angular 2.4, etc...). Confused about Angular version numbers? [**Read this**](http://angularjs.blogspot.nl/2016/12/ok-let-me-explain-its-going-to-be.html)*.

[Live demo](http://shinworld.altervista.org/othello/)

## Project history and goal

This application was initially our first experiment to learn AngularJS, started in December 2014.

In 2017 I decided to start refactoring it using the "*preparation steps*" suggested by the [Incrementally upgrade an old AngularJS application to Angular 2+ official tutorial](https://angular.io/docs/ts/latest/guide/upgrade.html).

As the tutorial says, *these preparation steps are all about making the code more decoupled, more maintainable, and up to speed with modern development tools. That means **the preparation work will not only make the eventual upgrade easier, but will also generally improve our AngularJS applications**.*

In short: wheather you will one day migrate to the new Angular 2+ or just stay with AngularJS forever, those preparation steps just **make your AngularJS application better**.

The goal of this repository is to show step by step how to apply those preparation steps and making your AngularJS application better and similar to Angular 2+ without actually changing the underlying framework.

## Refactoring stepts

All the refactoring steps are listed in detail [here](https://github.com/ShinDarth/Othello/wiki/Refactoring-steps).

## Installation instructions

In order to install run:

- ```npm install```
- ```npm run build```

Then start the web application using:

- ```npm start```
