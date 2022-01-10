import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget.items.model';


@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  isNewItem!: Boolean;
  @Input() item: BudgetItem = new BudgetItem('',0);
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
    if(this.item) {
      this.isNewItem=false;
    }
    else {
      this.isNewItem=true;
      this.item = new BudgetItem('', 0);
    }
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
