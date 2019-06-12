import { Component, OnInit, Input } from '@angular/core';
import { DeletelabelComponent } from '../../components/deletelabel/deletelabel.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LabelModel } from 'src/app/models/labelModel';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  @Input() label;

  public icon1 = 'label';

  constructor(public dialog: MatDialog) {
    
  }

  ngOnInit() {
  }
  changeLabelIcon() {
    if (this.icon1 == 'label') {
      this.icon1 = 'delete';

    }
  }
  changeDeleteIcon() {
    if (this.icon1 == 'delete') {
      this.icon1 = 'label';
    }
  }
  openDeleteLabel(label): void {
   console.log("in open delete label dialog");
   console.log(this.label);
    this.dialog.open(DeletelabelComponent, {
      data: label
    });
  }
}
