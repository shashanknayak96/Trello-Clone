import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-swimlane',
	templateUrl: './swimlane.component.html',
	styleUrls: ['./swimlane.component.scss']
})
export class SwimlaneComponent implements OnInit {

	@Input() swimlaneHeader: string | undefined;
	@Input() swimlaneCards: string[] = [];

	displayAddCardComponent: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	selectAllInput() {

	}


	drop(event: CdkDragDrop<string[]>) {
		console.log("Previous data:", event.previousContainer.data);
		console.log("Current data:", event.container.data);
		if (event.previousContainer !== event.container) {
			transferArrayItem(event.previousContainer.data, event.container.data,
				event.previousIndex, event.currentIndex)
		} else {
			moveItemInArray(this.swimlaneCards, event.previousIndex, event.currentIndex);
		}
		console.log("Updated", event.previousContainer.data);
	}

	public toggleAddCardComponent() {
		this.displayAddCardComponent = !this.displayAddCardComponent
	}
}
