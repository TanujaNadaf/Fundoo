import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';
import { SearchPipe } from '../pipe/search.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { IconComponent } from '../icon/icon.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatSnackBarModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { SearchlabelPipe } from '../pipe/searchlabel.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MatIconModule,MatChipsModule,MatCardModule,MatMenuModule,MatDividerModule,MatDatepickerModule,FormsModule,MatAutocompleteModule,MatSelectModule,MatCheckboxModule,HttpClientModule,MatSnackBarModule],
      declarations: [ DisplayComponent ,SearchPipe,IconComponent,SearchlabelPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
