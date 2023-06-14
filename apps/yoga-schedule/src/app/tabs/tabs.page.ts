import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

export interface Tab {
  name: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'dangineer-software-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  standalone: true,
})
export class TabsPage {
  protected tabs = signal<Tab[]>([
    {
      name: 'students',
      label: 'Students',
      icon: 'people-outline',
    },
    {
      name: 'calendar',
      label: 'Calendar',
      icon: 'calendar-outline',
    },
    {
      name: 'class-cards',
      label: 'Class cards',
      icon: 'book-outline',
    },
    {
      name: 'data',
      label: 'Data',
      icon: 'bar-chart-outline',
    },
  ]);
}
