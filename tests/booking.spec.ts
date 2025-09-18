import { test, expect } from '@playwright/test';
import { bookings } from '../fixtures/bookingData';
import { BookingPage } from '../pages/bookingPage';
import { HomePage } from '../pages/homePage';

test('homepage has title', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();
    await expect(page).toHaveTitle("Restful-booker-platform demo");
});

for (const b of bookings) {
  test(`Booking for ${b.first} ${b.last}`, async ({ page }) => {
    const homePage = new HomePage(page);
    const bookingPage = new BookingPage(page);
    
    await homePage.navigate();
    await homePage.selectFirstRoom();
    await bookingPage.clicklDoAReservation();

    await bookingPage.fillBookingForm(b.first, b.last, b.email, b.phone);
    await bookingPage.submitBooking();
    await bookingPage.verifyBookingConfirmed();
  });
}
