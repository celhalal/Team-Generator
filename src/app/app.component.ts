import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // store input for new member to store our state
  newMemberName = '';       // equal to an empty string
  members: string[] = [];   // store the list of names

  
  
}
