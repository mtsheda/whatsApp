import { Component } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent {

  iconsData = [
    { fontIcon: 'notifications', description: 'Notification' },
    { fontIcon: 'security', description: 'Security' },
    { fontIcon: 'theme', description: 'Theme' },
    { fontIcon: 'chat wallpaper', description: 'Chat Wallpaper' },
    { fontIcon: 'blocked', description: 'Blocked' },
    { fontIcon: 'desktop settings', description: 'Desktop Settings' },
    { fontIcon: 'keyboard shortcuts', description: 'Keyboard Settings' },
    { fontIcon: 'help', description: 'Help' },
  ];

}
