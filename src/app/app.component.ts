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
  errorMessage = '';

  // for each name, generate a new li using *ngFor

  onInput(member: string){
    this.newMemberName = member;
  }

  // inserts input of name into members array when 'Add' button is clicked
  addMember(){
    if (!this.newMemberName){
      this.errorMessage = "Name can't be empty";
      return;
    }
    this.errorMessage = "";
    this.members.push(this.newMemberName);
    this.newMemberName = '';
  }

}
