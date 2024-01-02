import { Page, chromium } from "playwright";
class ContactPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openPage() {
    await this.page.goto("https://www.fontele.ba");
  }
  async openContactForm() {
    const kontaktLink = await this.page.$(
        'a.nav-link:has-text("Kontakt")');
    if (kontaktLink) {
      await kontaktLink.click();
    } else {
      console.error("Kontakt link not found");
    }

  }
  async enterName(fullName: string) {
    if (this.page.url() == "https://fontele.ba/kontakt")
      await this.page.fill('[id="full_name"]', fullName, { timeout: 5000 }); 
    
  }
  async enterEmail(email: string) {
    if (this.page.url() == "https://fontele.ba/kontakt")
   await this.page.fill('[id="email"]', email, { timeout: 5000 });
 
  }
  async enterMessage(message: string) {
    
    if (this.page.url() == "https://fontele.ba/kontakt")
       await this.page.fill('[id="msg"]', message, { timeout: 5000 });
    }
    
  }


export default ContactPage;
