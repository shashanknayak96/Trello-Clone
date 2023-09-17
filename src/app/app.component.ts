import { Component, HostListener, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'TrelloClone';

	@Input() open: boolean = true;

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
