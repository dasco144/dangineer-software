import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRouterLink,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  peopleOutline,
  calendarOutline,
  bookOutline,
  barChartOutline,
} from 'ionicons/icons';

addIcons({
  peopleOutline,
  calendarOutline,
  bookOutline,
  barChartOutline,
});

export interface Tab {
  name: string;
  label: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'dgs-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    IonApp,
    IonContent,
    IonHeader,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonToolbar,
    IonTitle,
    RouterLink,
  ],
  standalone: true,
})
export class AppComponent {
  protected pageLabel = signal<string>('Students');

  protected tabs = signal<Tab[]>([
    {
      name: 'students',
      label: 'Students',
      icon: 'people-outline',
      url: 'students',
    },
    {
      name: 'calendar',
      label: 'Calendar',
      icon: 'calendar-outline',
      url: 'calendar',
    },
    {
      name: 'class-cards',
      label: 'Class cards',
      icon: 'book-outline',
      url: 'class-cards',
    },
    {
      name: 'data',
      label: 'Data',
      icon: 'bar-chart-outline',
      url: 'data',
    },
  ]);
}
