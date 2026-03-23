import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from 'qbm';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { OnboardingPageComponent } from './onboarding-page/onboarding-page.component';

@NgModule({
  declarations: [OnboardingPageComponent],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
  ],
})
export class OnboardingModule {
  constructor(private readonly menuService: MenuService) {
    this.registerMenu();
  }

  private registerMenu(): void {
    this.menuService.addMenuFactories(
      (_preProps: string[], _groups: string[]) => {
        return {
          id: 'onboarding-root',
          title: '#LDS#Onboarding',
          navigationCommands: { commands: ['/onboarding-page'] },
          sorting: '80',
          items: [
            {
              id: 'onboarding-page',
              navigationCommands: { commands: ['/onboarding-page'] },
              title: '#LDS#Onboarding Page',
              sorting: '10',
            }
          ]
        };
      }
    );
  }
}