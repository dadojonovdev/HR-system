import { Component } from '@angular/core';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent {
  columns = ['id', 'firstName', 'lastName', 'age']

  rows = [
    {id: 1, firstName: 'Далерчон', lastName: 'Дадочонов', age: 24},
  ]
}
