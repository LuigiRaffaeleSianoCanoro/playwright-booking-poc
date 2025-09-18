import { Page, Locator } from '@playwright/test';

export class BookingPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly phone: Locator;
  readonly reserveButton: Locator;
  readonly bookingConfirmedHeading: Locator;
  readonly doAReservationButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.getByLabel('Firstname');
    this.lastName = page.getByLabel('Lastname');
    this.email = page.getByLabel('Email');
    this.phone = page.getByLabel('Phone');
    this.reserveButton = page.getByRole('button', { name: 'Reserve Now' });
    this.bookingConfirmedHeading = page.getByRole('heading', { level: 2, name: 'Booking Confirmed' });
    this.doAReservationButton = page.locator('#doReservation');
  }

  async clicklDoAReservation() {
    await this.page.locator('#doReservation').click();
  }

  async fillBookingForm(first: string, last: string, email: string, phone: string) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.email.fill(email);
    await this.phone.fill(phone);
  }

  async submitBooking() {
    await this.reserveButton.click();
  }

  async verifyBookingConfirmed() {
    await this.bookingConfirmedHeading.waitFor({ state: 'visible' });
  }
}
