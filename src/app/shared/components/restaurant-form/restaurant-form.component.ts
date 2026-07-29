import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { RestaurantView } from '@app/shared/models/restaurant.model';

import { RESTAURANT_FORM, RESTAURANT_VALIDATION_MESSAGES } from './restaurant-form.constants';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantFormComponent {
  private readonly formBuilder = inject(FormBuilder);

  @Input() isEditMode = false;
  @Input() isLoading = false;
  @Input()
  set userDetails(value: RestaurantView | undefined) {
    if (!value) {
      return;
    }

    this.restaurantForm.patchValue({
      name: value.name,
      address: value.address,
      owners: value.owners,
    });
  }

  @Output() formSubmit = new EventEmitter<RestaurantView>();
  @Output() cancel = new EventEmitter<void>();

  readonly ENTER = ENTER;
  readonly COMMA = COMMA;

  readonly restaurantForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(RESTAURANT_FORM.NAME_MINIMUM_LENGTH)]],
    address: [
      '',
      [Validators.required, Validators.minLength(RESTAURANT_FORM.ADDRESS_MINIMUM_LENGTH)],
    ],
    owners: this.formBuilder.nonNullable.control<string[]>(
      [],
      [Validators.required, Validators.minLength(1)],
    ),
  });

  get name() {
    return this.restaurantForm.controls.name;
  }

  get address() {
    return this.restaurantForm.controls.address;
  }

  get owners() {
    return this.restaurantForm.controls.owners;
  }

  get nameError(): string {
    if (this.name.hasError('required')) {
      return RESTAURANT_VALIDATION_MESSAGES.NAME.REQUIRED;
    }

    if (this.name.hasError('minlength')) {
      return RESTAURANT_VALIDATION_MESSAGES.NAME.MINIMUM_LENGTH;
    }

    return '';
  }

  get addressError(): string {
    if (this.address.hasError('required')) {
      return RESTAURANT_VALIDATION_MESSAGES.ADDRESS.REQUIRED;
    }

    if (this.address.hasError('minlength')) {
      return RESTAURANT_VALIDATION_MESSAGES.ADDRESS.MINIMUM_LENGTH;
    }

    return '';
  }

  get ownersError(): string {
    if (this.owners.hasError('required')) {
      return RESTAURANT_VALIDATION_MESSAGES.OWNER.REQUIRED;
    }

    return '';
  }

  submitForm(): void {
    if (this.restaurantForm.invalid) {
      this.restaurantForm.markAllAsTouched();

      return;
    }

    this.formSubmit.emit(this.restaurantForm.getRawValue());
  }

  addOwnerEmail(event: Event): void {
    const input = event.target as HTMLInputElement;
    const email = input.value.trim();

    if (!email || !this.isValidEmail(email)) {
      return;
    }

    const currentOwners = this.owners.value;

    if (!currentOwners.includes(email)) {
      this.owners.setValue([...currentOwners, email]);
    }

    input.value = '';
  }

  removeOwnerEmail(email: string): void {
    this.owners.setValue(this.owners.value.filter((owner) => owner !== email));
  }

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
