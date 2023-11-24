import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  memberData!: any[];
  startIdx = 0;
  membersPerPage = 20; 
  filteredMembers: any[] = [];
  uniqueDomains: string[] = [];
  selectedTeamMembers: any[] = [];
  teams: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getData().subscribe((data: any) => {
      this.memberData = data;
      this.filteredMembers = this.memberData;
      this.findUniqueDomains();
    });
  }

  findUniqueDomains() {
    this.uniqueDomains = [...new Set(this.memberData.map((member: any) => member.domain))];
  }

  getCurrentPageMembers() {
    return this.filteredMembers.slice(this.startIdx, this.startIdx + this.membersPerPage);
  }

  searchByFullName(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      const searchValue = inputElement.value.toLowerCase();
      this.filteredMembers = this.memberData.filter(
        (member: any) =>
          member.first_name.toLowerCase().includes(searchValue) ||
          member.last_name.toLowerCase().includes(searchValue)
      );
      this.startIdx = 0;
    }
  }

  filterByDomain(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    if (selectElement) {
      const domain = selectElement.value;
      this.filteredMembers = this.memberData.filter((member: any) => (domain ? member.domain === domain : true));
      this.startIdx = 0;
    }
  }

  filterByGender(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    if (selectElement) {
      const gender = selectElement.value;
      this.filteredMembers = this.memberData.filter((member: any) => (gender ? member.gender === gender : true));
      this.startIdx = 0;
    }
  }

  filterByAvailability(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    if (selectElement) {
      const availability = selectElement.value;
      const available = availability === 'true' ? true : availability === 'false' ? false : null;
      this.filteredMembers = this.memberData.filter((member: any) =>
        available !== null ? member.available === available : true
      );
      this.startIdx = 0;
    }
  }

  shiftMembers(direction: 'forward' | 'backward') {
    if (direction === 'forward') {
      if (this.startIdx + this.membersPerPage < this.memberData.length) {
        this.startIdx += this.membersPerPage;
      }
    } else if (direction === 'backward') {
      if (this.startIdx - this.membersPerPage >= 0) {
        this.startIdx -= this.membersPerPage;
      }
    }
  }

  createTeam() {
    const selectedDomainMembers = this.filteredMembers.filter((member: any) => member.available && !this.selectedTeamMembers.includes(member));
    this.selectedTeamMembers = [...this.selectedTeamMembers, ...selectedDomainMembers];
  }

  displayTeamDetails() {
    console.log('Team Members:', this.selectedTeamMembers);
  }

  addToTeam(member: any) {
    if (member.available) {
      if (!this.selectedTeamMembers.includes(member)) {
        const memberInTeam = this.teams.some(team => team.includes(member));
        if (!memberInTeam) {
          this.selectedTeamMembers.push(member);
        } else {
          alert(`${member.first_name} ${member.last_name} is already in a team.`);
        }
      }
    } else {
      alert(`${member.first_name} ${member.last_name} is not available.`);
    }
  }

  isMemberAlreadyAdded(member: any): boolean {
    return this.selectedTeamMembers.includes(member);
  }

  formTeam() {
    this.teams.push(this.selectedTeamMembers);
    this.memberData = this.memberData.filter(member => !this.selectedTeamMembers.includes(member));
    this.selectedTeamMembers = [];
  }
}
