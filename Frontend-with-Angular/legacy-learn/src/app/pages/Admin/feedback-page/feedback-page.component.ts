import { Component } from '@angular/core';
import { HomeNavigationComponent } from "../../../components/home-navigation/home-navigation.component";
import { SideBarComponent } from "../../../components/side-bar/side-bar.component";

@Component({
    selector: 'app-feedback-page',
    standalone: true,
    templateUrl: './feedback-page.component.html',
    styleUrl: './feedback-page.component.css',
    imports: [HomeNavigationComponent, SideBarComponent]
})
export class FeedbackPageComponent {

}
