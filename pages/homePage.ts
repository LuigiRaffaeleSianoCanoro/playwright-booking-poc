import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly firstRoomBookNowButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstRoomBookNowButton = page.locator('#rooms a').first();
  }

  async navigate() {
    await this.page.goto('https://automationintesting.online/');
  }

  async selectFirstRoom() {
    await this.firstRoomBookNowButton.click();
  }
}
