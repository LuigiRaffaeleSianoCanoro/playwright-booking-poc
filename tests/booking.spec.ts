import { test, expect } from '@playwright/test';
import { bookings } from '../fixtures/bookingData';
import { BookingPage } from '../pages/bookingPage';
import { HomePage } from '../pages/homePage';

let homePage: HomePage;
let bookingPage: BookingPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  bookingPage = new BookingPage(page);
});

test('homepage has title', async () => {
  await homePage.navigate();
  await expect(homePage.page).toHaveTitle("Restful-booker-platform demo");
});

for (const b of bookings) {
  test(`Booking for ${b.first} ${b.last}`, async () => {
    await homePage.navigate();
    await homePage.selectFirstRoom();
    await bookingPage.clicklDoAReservation();

    await bookingPage.fillBookingForm(b.first, b.last, b.email, b.phone);
    await bookingPage.submitBooking();
    await bookingPage.verifyBookingConfirmed();
  });
}
