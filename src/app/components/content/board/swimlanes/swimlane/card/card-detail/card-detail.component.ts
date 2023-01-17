import { Component, HostListener, Inject } from '@angular/core';
import { DialogRef } from 'src/app/service/dialog/dialog-ref';
import { DIALOG_DATA } from 'src/app/service/dialog/dialog-tokens';

@Component({
  selector: 'app-login',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent {
  constructor(
	private dialogRef: DialogRef,
	@Inject(DIALOG_DATA) public data: string
  ) {}

  close() {
	this.dialogRef.close();
  }
}
