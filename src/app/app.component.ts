import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'collection-demo';
  displayedColumns: string[] = ['id', 'name'];
  dataSource = [
  	{id: 1, name: 'Alice'},
  	{id: 2, name: 'Bob'},
  ];
}
