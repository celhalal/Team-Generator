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
  numberOfTeams: number | '' = '';
  teams:string[][] = [];

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

  onTeamSizeInput(value: string){
    this.numberOfTeams = Number(value);
  }

  generateTeams(){
    this.teams = [];
    // copy original array to keep track of how many users left
    const allMembers = [...this.members];

    if(!this.numberOfTeams || this.numberOfTeams <= 0){
      this.errorMessage = 'Invalid number of teams';
    }

    if(this.members.length < this.numberOfTeams){
      this.errorMessage = 'Not enough members';
      return;
    }

    // clear up error message once # of teams is valid
    this.errorMessage = '';

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    } 
    console.log(this.teams);

    // clean up box after generating team members
    this.members = [];
    this.numberOfTeams = '';

  }
}
