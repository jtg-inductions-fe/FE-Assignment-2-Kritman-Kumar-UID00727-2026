import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewAllRestaurantsComponent } from './view-all-restaurants/view-all-restaurants.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { RESTAURANT_ROUTS } from './restaurants.constant';

const routes: Routes = [
  {
    path: '',
    component: ViewAllRestaurantsComponent,
  },
  {
    path: RESTAURANT_ROUTS.ADD_RESTAURANT,
    component: AddRestaurantComponent,
  },
  {
    path: `${RESTAURANT_ROUTS.EDIT_RESTAURANT}/:restaurantId`,
    component: EditRestaurantComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantsRoutingModule {}
