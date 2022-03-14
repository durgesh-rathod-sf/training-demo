import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { HumanizePipe } from './humanize.pipe';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [AppComponent, CustomTableComponent, HumanizePipe, TooltipDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
