import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeletelabelComponent } from './deletelabel.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

describe('DeletelabelComponent', () => {
  let component: DeletelabelComponent;
  let fixture: ComponentFixture<DeletelabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,MatDialogModule],
      declarations: [ DeletelabelComponent ],
      providers:[
        {provide:MatDialogRef,},
        {provide:MAT_DIALOG_DATA,useValue:{},}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletelabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
