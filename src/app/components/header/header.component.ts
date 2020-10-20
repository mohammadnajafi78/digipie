import { SettingService } from './../../services/setting.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isSmallScreen = false;
  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    public settingService: SettingService
  ) {}

  ngOnInit(): void {
    this.isSmallScreen = this.breakpointObserver.isMatched(
      '(max-width: 768px)'
    );
  }
}
