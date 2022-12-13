import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-swimlanes',
	templateUrl: './swimlanes.component.html',
	styleUrls: ['./swimlanes.component.scss']
})
export class SwimlanesComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	swimlaneData1 = [
		{
			'name': 'To Do',
			'cards': ['test1', 'test2','test1', 'test2','test1', 'test2','test1', 'test2','test1', 'test2','test1', 'test2','test1', 'test2','test1', 'test2','test1', 'test2']
		},
		{
			'name': 'Doing',
			'cards': ['Doing 1', 'Doing 2']
		},
		{
			'name': 'Done',
			'cards': []
		},
		{
			'name': 'Doing',
			'cards': ['Doing 1', 'Doing 2']
		},
	];

	public drop(event: CdkDragDrop<string[]>) {
		moveItemInArray(this.swimlaneData1, event.previousIndex, event.currentIndex);
	}
}
