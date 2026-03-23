import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingPageComponent } from './onboarding-page/onboarding-page.component';

const routes: Routes = [
  {
    path: 'onboarding-page',
    component: OnboardingPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule {}