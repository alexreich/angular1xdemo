import { NgModule } from 'angular-ts-decorators';
import { OthelloAIService } from './othello-ai.service';
import { OthelloHandlerService } from './othello-handler.service';
import { BtnStartComponent } from './btn-start.component';
import { PlayerScoreComponent } from './player-score.component';
import { OthelloBoard } from './othello-board.component';
import { Othello } from './othello.component';

import { TileHandlerService } from './services/tile-handler.service';

//TODO: Break RandomTile into it's own module and wire that (it's likely to grow)
import { RandomTileExpanded } from "./random-tile-expanded/random-tile-expanded.component";
import { RandomTileList } from "./random-tile-list/random-tile-list.component";

@NgModule({
    id: 'OthelloModule',
    declarations: [
        BtnStartComponent,
        PlayerScoreComponent,
        OthelloBoard,
		Othello,
		RandomTileExpanded,
        RandomTileList
    ],
    providers: [
        OthelloAIService,
        OthelloHandlerService,
        TileHandlerService
    ]
})
export class OthelloModule {}
