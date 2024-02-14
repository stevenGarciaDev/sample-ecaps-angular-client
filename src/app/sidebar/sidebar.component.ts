import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isOpen = false;

  @ViewChild('sidenav', { read: ElementRef })
  sidenavRef!: ElementRef<HTMLElement>;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (
      this.isOpen &&
      !this.sidenavRef.nativeElement.contains(event.target as Node)
    ) {
      this.isOpen = false;
    }
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
