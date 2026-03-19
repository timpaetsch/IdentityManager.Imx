import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { EuiCoreModule } from '@elemental-ui/core';
import { CommonModule } from '@angular/common';
import { TilesModule } from '../tiles/tiles.module';
import { UserModelService } from '../user/user-model.service';
import { UserGroupInfo } from '@imx-modules/imx-api-qer';

@Component({
  selector: 'imx-link-to-admin-portal-tile',
  templateUrl: './link-to-admin-portal-tile.component.html',
  styleUrls: ['./link-to-admin-portal-tile.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    TranslateModule,
    EuiCoreModule,
    TilesModule,
  ]
})
export class LinkToAdminPortalTileComponent implements OnInit {

  public description = 'Opens the Admin Portal.';
  public groups: UserGroupInfo[] = [];

  constructor(private readonly userModelService: UserModelService) {}

  public async ngOnInit(): Promise<void> {
    this.groups = await this.userModelService.getGroups();
  }

  public ShowAdminPortalTile(): boolean {
    return this.groups.some(g => g.Name === 'CCCEditRole');
  }

  public openInNewTab(): void {
    window.open('https://www.youtube.com/', '_blank');
  }
}