import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbFormFieldModule,
  NbUserModule,
  NbSearchModule,
  NbMenuModule,
} from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbListModule,
    NbButtonModule,
    NbCheckboxModule,
    NbIconModule,
    NbInputModule,
    NbFormFieldModule,
    NbUserModule,
    NbSearchModule,
    NbMenuModule,
  ],
})
export class SharedModule {}
