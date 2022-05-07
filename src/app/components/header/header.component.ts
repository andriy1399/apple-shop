import { ModalService } from './../../shared/services/modal.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(public modal: ModalService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: 'home',
      },
      {
        label: 'Store',
        items: [
          { label: 'Iphone', icon: 'pi pi-fw pi-mobile', routerLink: ['/store', 'iphone'] },
          { label: 'Mac', icon: 'pi pi-fw pi-apple', routerLink: ['/store', 'mac'] },
          { label: 'Air pods', icon: 'pi pi-fw pi-volume-down', routerLink: ['/store', 'air-pods'] },
        ],
      },
    ];
  }
}
