import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  unfocusLogo(event) {
    console.log(event);
    event.srcElement.blur();
    if (event.srcElement.parentNode.id === "headerLogo") {
      event.srcElement.parentNode.blur();
    }
  }
}
