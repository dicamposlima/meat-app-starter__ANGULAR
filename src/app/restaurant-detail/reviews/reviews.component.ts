import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from "../../restaurants/restaurants.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  animations: [
    trigger('reviewAppeared', [
      state('ready', style({
        opacity: 1
      })),
      transition('void => ready', [
        style({
          opacity: 0,
          transform: 'translate(-0px, -10px)'
        }),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ReviewsComponent implements OnInit {

  restaurantState = 'ready'
  
  reviews: Observable<any>

  constructor(private restaurantsService: RestaurantsService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantsService.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
