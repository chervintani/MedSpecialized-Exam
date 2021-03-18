import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faChartBar,
  faFlag,
  faListAlt,
} from '@fortawesome/free-regular-svg-icons';
import {
  faBook,
  faBookOpen,
  faUsers,
  faUser,
  faList,
  faUserCircle,
  faQuestionCircle,
  faExchangeAlt,
  faBell,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {

  sideNavStyles = "https://www.w3schools.com/w3css/4/w3.css";
  imsLogo = "../../../../assets/images/ims.png";
  userLogo = "../../../assets/images/user-default.svg";

  faDashboard = faChartBar;
  faFlag = faFlag;
  faBook = faBookOpen;
  faAssessment = faListAlt;
  faModule = faBook;
  faTeams = faUsers;
  faUser = faUser;
  faReport = faList;
  faProfile = faUserCircle;
  faHelp = faQuestionCircle;
  faExchange = faExchangeAlt;
  faBell = faBell;
  faSignOutAlt = faSignOutAlt;
  tabs: any[] = [
    { icon: this.faDashboard, name: 'Dashboard' },
    { icon: this.faFlag, name: 'Career Path' },
    { icon: this.faBook, name: 'Learning Course' },
    { icon: this.faAssessment, name: 'Assessments' },
    { icon: this.faModule, name: 'Module Library' },
    { icon: this.faTeams, name: 'Teams' },
    { icon: this.faUser, name: 'Users' },
    { icon: this.faReport, name: 'Reports' },
    { icon: this.faProfile, name: 'Profiles' },
    { icon: this.faHelp, name: 'Help and Feedback' },
  ];
  constructor(private router: Router) {}

  ngOnInit() {
    let authenticated =localStorage.getItem('authenticated');
    if(authenticated!="true"){
      this.router.navigate(['/']);
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
