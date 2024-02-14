import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products = [
    {
      id: 1,
      name: 'Fans',
      imageUrl: 'assets/images/fans.png',
      hasExcelSheet: true,
    },
    {
      id: 2,
      name: 'Louvers',
      imageUrl: 'assets/images/louvers.png',
      hasExcelSheet: true,
    },
    {
      id: 3,
      name: 'Outdoor-Air',
      imageUrl: 'assets/images/doas.png',
      hasExcelSheet: true,
    },
    {
      id: 4,
      name: 'Make-up Air',
      imageUrl: 'assets/images/makeupair.png',
      hasExcelSheet: true,
    },
    {
      id: 5,
      name: 'Energy Recovery Venitlators',
      imageUrl: 'assets/images/preconditioners.png',
      hasExcelSheet: true,
    },
    {
      id: 6,
      name: 'Air Terminal Units',
      imageUrl: 'assets/images/atu.png',
      hasExcelSheet: false,
    },
    {
      id: 7,
      name: 'Dampers',
      imageUrl: 'assets/images/dampers2.png',
      hasExcelSheet: false,
    },
    {
      id: 8,
      name: 'Grilles, Registers and Diffusers',
      imageUrl: 'assets/images/grd.png',
      hasExcelSheet: false,
    },
    {
      id: 9,
      name: 'Healthcare, Laboratory, and Cleanroom Products',
      imageUrl: 'assets/images/hlc.png',
      hasExcelSheet: false,
    },
  ];
}
