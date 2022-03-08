import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-todo-group',
  templateUrl: './todo-group.component.html',
  styleUrls: ['./todo-group.component.sass'],
})
export class TodoGroupComponent implements OnInit {
  items: NbMenuItem[] = [
    {
      title: 'Important',
      icon: 'star',
    },
    // {
    //   title: 'Change Password',
    //   icon: 'lock-outline',
    // },
    // {
    //   title: 'Privacy Policy',
    //   icon: { icon: 'checkmark-outline', pack: 'eva' },
    // },
    // {
    //   title: 'Logout',
    //   icon: 'unlock-outline',
    // },
  ];
  constructor() {}

  ngOnInit(): void {}
}
