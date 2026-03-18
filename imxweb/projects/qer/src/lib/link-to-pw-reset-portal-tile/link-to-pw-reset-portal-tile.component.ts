import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { EuiCoreModule } from '@elemental-ui/core';
import { TilesModule } from '../tiles/tiles.module';
@Component({
  selector: 'imx-link-to-pw-reset-portal-tile',
  templateUrl: './link-to-pw-reset-portal-tile.component.html',
  styleUrls: ['./link-to-pw-reset-portal-tile.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    TranslateModule,
    EuiCoreModule,
    TilesModule,
  ]
})
export class LinkToPwResetPortalTileComponent {
  public description = 'Opens the Password Reset Portal.';
  public openInNewTab(): void {
    window.open('https://google.de', '_blank');
  }
}
