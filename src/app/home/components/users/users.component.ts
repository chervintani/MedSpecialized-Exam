import { Component, OnInit } from '@angular/core';
import { faSearch, faPlus} from '@fortawesome/free-solid-svg-icons';
interface User {
  email: string;
  name: string;
  status: string;
  role: string;
}

const USERS: User[] = [
  {
    email: "admin1@meditab.com",
    name: "Admin 1 Sample",
    status: "Active",
    role: "Admin"
  },
  {
    email: "admin2@meditab.com",
    name: "Admin 2 Sample",
    status: "Active",
    role: "Admin"
  },
  {
    email: "darylo@meditab.com",
    name: "Daryl Otsuka",
    status: "Active",
    role: "Trainee"
  },
  {
    email: "faith@meditab.com",
    name: "asdasd asdasdad",
    status: "Active",
    role: "Trainee"
  },
  {
    email: "jayd@meditab.com",
    name: "Jay Dhanani",
    status: "Active",
    role: "Trainee"
  },
  {
    email: "kenneths@meditab.com",
    name: "Kenneth Jay Simbulan",
    status: "Active",
    role: "Admin"
  },
  {
    email: "manuelc@meditab.com",
    name: "Manuel Calbes",
    status: "Active",
    role: "Trainee"
  },
  {
    email: "sample@meditab.com",
    name: "Sample Account",
    status: "Active",
    role: "Trainee"
  },
  {
    email: "seant@meditab.com",
    name: "Sean Timm",
    status: "Active",
    role: "Trainee"
  },
  {
    email: "trainee2@meditab.com",
    name: "Trainee 2 Sample",
    status: "Active",
    role: "Trainee"
  },
  {
    email: "user166@meditab.com",
    name: "Test 1",
    status: "Active",
    role: "Trainee"
  },
  {
    email: "user1@meditab.com",
    name: "Sample Name",
    status: "Active",
    role: "Trainee"
  },
  {
    email: "user2@meditab.com",
    name: "User 2 Sample",
    status: "Active",
    role: "Trainee"
  },
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor() {
    this.refreshUsers();
  }
  viewImg = "../../../../assets/images/view.svg";
  editImg = "../../../../assets/images/edit.svg";
  deleteImg = "../../../../assets/images/trash.svg";
  userImg = "../../../../assets/images/user-default.svg";
  faSearch = faSearch;
  faPlus = faPlus
  ngOnInit(): void {}

  page = 1;
  pageSize = 9;
  collectionSize = USERS.length;
  users: User[] = [];

  refreshUsers() {
    this.users = USERS.map((user, i) => ({
      id: i + 1,
      ...user,
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
}
