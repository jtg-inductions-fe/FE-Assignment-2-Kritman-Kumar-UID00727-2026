import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { SidebarItem } from '@shared/models/sidebar.model';

@Component({
  selector: 'app-sidebar-links',
  templateUrl: './sidebar-links.component.html',
  styleUrls: ['./sidebar-links.component.scss'],
})
export class SidebarLinksComponent implements OnInit {
  @Input() sidebarLinks: SidebarItem[] = [];

  treeControl = new NestedTreeControl<SidebarItem>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<SidebarItem>();

  ngOnInit() {
    this.dataSource.data = this.sidebarLinks;
  }

  hasChild = (_: number, node: SidebarItem) => !!node.children && node.children.length > 0;
}
