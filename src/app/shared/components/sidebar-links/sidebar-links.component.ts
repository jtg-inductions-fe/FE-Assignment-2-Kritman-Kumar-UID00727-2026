import { Component, Input, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';

import { MatTreeNestedDataSource } from '@angular/material/tree';

import { SidebarNavItem } from '@shared/models/sidebar.model';

@Component({
  selector: 'app-sidebar-links',
  templateUrl: './sidebar-links.component.html',
  styleUrls: ['./sidebar-links.component.scss'],
})
export class SidebarLinksComponent implements OnInit {
  @Input() sidebarNavItems: SidebarNavItem[] = [];

  treeControl = new NestedTreeControl<SidebarNavItem>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<SidebarNavItem>();

  ngOnInit() {
    this.dataSource.data = this.sidebarNavItems;
  }

  hasChild = (_: number, node: SidebarNavItem) => !!node.children && node.children.length > 0;
}
