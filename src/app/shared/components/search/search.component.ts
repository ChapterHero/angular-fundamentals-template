import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() placeholder: string = "Input Text";
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  searchText: string = "";

  onSearch() {
    this.search.emit(this.searchText); /* TODO, Logic in App Component */
    this.searchText = "";
  }
}

