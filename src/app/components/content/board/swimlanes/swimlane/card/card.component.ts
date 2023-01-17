import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'src/app/service/dialog/dialog.service';
import { CardDetailComponent } from './card-detail/card-detail.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

	@Input() cardData : string | undefined;

  constructor(private dialog: DialogService) { }

  ngOnInit(): void {
	//const dialogRef = this.dialog.open(CardDetailComponent);

  }

  public openAddCard() {
	const dialogRef = this.dialog.open(CardDetailComponent);

	dialogRef.afterClosed().subscribe(() => {
	})
  }

  public closeCard() {
	this.dialog.close();
  }

}
