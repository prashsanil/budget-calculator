import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget.items.model';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';


@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})

export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems!: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onCardCLicked(item: BudgetItem) {
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '500px',
      data: item
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result)
        {
          this.update.emit({oldItem: item, newItem: result})
          // this.budgetItems[this.budgetItems.indexOf(item)] = result; 
        }
      })
    }

  onDelete(item: BudgetItem)
  {
    this.delete.emit(item)
  }
}

export interface UpdateEvent {
  oldItem: BudgetItem;
  newItem: BudgetItem;
}