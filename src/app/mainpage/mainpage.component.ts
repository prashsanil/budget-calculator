import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget.items.model';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  totalBudget: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem)
  {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item: BudgetItem)
  {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index,1)
    this.totalBudget -= item.amount;
  }


  updateItem(updateEvent: UpdateEvent)
  {
    this.budgetItems[this.budgetItems.indexOf(updateEvent.oldItem)] = updateEvent.newItem;

    //update total budget

    this.totalBudget-= updateEvent.oldItem.amount;
    this.totalBudget+=updateEvent.newItem.amount;
  }

}
