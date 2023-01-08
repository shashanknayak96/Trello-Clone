import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

	@Input() open: boolean = true;

	constructor() { }

	ngOnInit(): void {
	}

	toggleSideBar() {
		console.log("TOGGLING");
		this.open = !this.open;
	}

	@HostListener('document:keypress', ['$event'])
	handleKeyboardEvent(event: KeyboardEvent) {
		if (event.key == '[') {
			this.toggleSideBar();
		}
	}

}
