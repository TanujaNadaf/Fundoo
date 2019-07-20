import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CropimageComponent } from './cropimage.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';



describe('CropimageComponent', () => {
  let component: CropimageComponent;
  let fixture: ComponentFixture<CropimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ImageCropperModule,MatDialogModule,HttpClientModule],
      declarations: [ CropimageComponent ],
      providers:[
        {
         provide: MatDialogRef,
         

        },
        { provide: MAT_DIALOG_DATA, useValue:{} },
       
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
