import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SubNavigationBarComponent } from "./sub-navigation-bar.component";

describe("SubNavigationBarComponent", () => {
  let component: SubNavigationBarComponent;
  let fixture: ComponentFixture<SubNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubNavigationBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
